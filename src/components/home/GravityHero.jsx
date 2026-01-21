
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const GravityHero = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        // Create renderer
        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });
        renderRef.current = render;

        // Walls
        const walls = [
            Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true, render: { visible: false } }), // Bottom
            Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true, render: { visible: false } }), // Top
            Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } }), // Right
            Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } })  // Left
        ];
        Composite.add(world, walls);

        // Falling Elements
        const words = ['Design', 'Creative', 'Brand', 'Strategy', 'Interactive', 'Web', 'Mobile', 'Innovate'];
        const colors = ['#211282', '#1e1178', '#f8f8f8', '#3b82f6', '#ec4899'];

        const elements = [];

        // Randomize initial positions
        for (let i = 0; i < words.length; i++) {
            const x = Math.random() * (width - 100) + 50;
            const y = Math.random() * -500 - 50;
            const w = 120 + Math.random() * 60;
            const h = 40 + Math.random() * 20;
            const color = colors[i % colors.length];

            const body = Bodies.rectangle(x, y, w, h, {
                render: {
                    fillStyle: color,
                    strokeStyle: '#ffffff',
                    lineWidth: 2
                },
                chamfer: { radius: 8 },
                restitution: 0.8,
                label: words[i] // Custom property for text
            });
            elements.push(body);
        }

        // Add some random shapes
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * (width - 50) + 25;
            const y = Math.random() * -500;
            const s = 30 + Math.random() * 30;
            elements.push(Bodies.circle(x, y, s, {
                render: { fillStyle: colors[Math.floor(Math.random() * colors.length)] },
                restitution: 0.9
            }));
        }


        Composite.add(world, elements);

        // Mouse Control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        Composite.add(world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Custom Rendering for Text
        Events.on(render, 'afterRender', function () {
            const context = render.context;
            context.font = 'bold 16px "Inter", sans-serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#ffffff';

            Composite.allBodies(engine.world).forEach((body) => {
                if (body.label && body.label !== 'Rectangle Body' && body.label !== 'Circle Body' && body.label !== 'Body') {
                    const { x, y } = body.position;
                    const angle = body.angle;

                    context.save();
                    context.translate(x, y);
                    context.rotate(angle);
                    context.fillText(body.label, 0, 0);
                    context.restore();
                }
            });
        });

        // Run
        Render.run(render);
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Handle Resize
        const handleResize = () => {
            if (!sceneRef.current || !renderRef.current) return;
            const w = sceneRef.current.clientWidth;
            const h = sceneRef.current.clientHeight;

            renderRef.current.canvas.width = w;
            renderRef.current.canvas.height = h;

            // Reposition walls (simplified - removing and adding might be cleaner but this works for minor resizes)
            // For now, just let them fall out if refined or keep simple.
            // Actually, recreating walls is safer.
            Composite.remove(world, walls);
            const newWalls = [
                Bodies.rectangle(w / 2, h + 25, w, 50, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(w / 2, -25, w, 50, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(w + 25, h / 2, 50, h, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(-25, h / 2, 50, h, { isStatic: true, render: { visible: false } })
            ];
            Composite.add(world, newWalls);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            Composite.clear(world);
            Engine.clear(engine);
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, []);

    return (
        <div ref={sceneRef} className="w-full h-full min-h-[400px] bg-transparent rounded-3xl overflow-hidden touch-none relative select-none" />
    );
};

export default GravityHero;
