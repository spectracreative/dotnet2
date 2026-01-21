import { useEffect, useRef } from 'react';
import bgImage from '../../assets/landing-bg.jpg';

const WaterRippleEffect = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const container = containerRef.current;

        let width, height;
        let rippleMap = [];
        let lastMap = [];
        let mapIdx;
        let texture;
        let rippleData;
        let textureData;

        const damping = 0.96;

        const loadImage = () => {
            const img = new Image();
            img.src = bgImage;
            img.onload = () => {
                texture = img;
                init();
            };
        };

        const init = () => {
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;

            canvas.width = width;
            canvas.height = height;

            // Draw image to get data
            ctx.drawImage(texture, 0, 0, width, height);
            textureData = ctx.getImageData(0, 0, width, height);
            rippleData = ctx.getImageData(0, 0, width, height);

            // Initialize ripple maps
            rippleMap = [];
            lastMap = [];

            // Downscale the ripple map for performance
            const mapWidth = width >> 1;
            const mapHeight = height >> 1;
            const size = mapWidth * mapHeight;

            for (let i = 0; i < size; i++) {
                lastMap[i] = rippleMap[i] = 0;
            }

            canvas.addEventListener('mousemove', handleMouseMove);
            animate();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) >> 1;
            const y = (e.clientY - rect.top) >> 1;
            disturb(x, y);
        };

        const disturb = (dx, dy) => {
            const mapWidth = width >> 1;
            const mapHeight = height >> 1;

            // Create a larger splash
            for (let j = dy - 2; j < dy + 2; j++) {
                for (let k = dx - 2; k < dx + 2; k++) {
                    if (j >= 0 && j < mapHeight && k >= 0 && k < mapWidth) {
                        rippleMap[mapWidth * j + k] += 128; // Energy
                    }
                }
            }
        };

        const animate = () => {
            const mapWidth = width >> 1;
            const mapHeight = height >> 1;
            const size = mapWidth * mapHeight;

            // Swap maps
            let tmp = rippleMap;
            rippleMap = lastMap;
            lastMap = tmp;

            let i, a, b;
            let mapInd = mapWidth;

            // Ripple propagation algorithm
            for (let y = 1; y < mapHeight - 1; y++) {
                for (let x = 1; x < mapWidth - 1; x++) {
                    // Average of neighbours - current
                    const data = (
                        lastMap[mapInd - mapWidth] +
                        lastMap[mapInd + mapWidth] +
                        lastMap[mapInd - 1] +
                        lastMap[mapInd + 1]
                    ) >> 1;

                    let val = data - rippleMap[mapInd];
                    val -= val >> 5; // Damping

                    rippleMap[mapInd] = val;
                    val = 1024 - val; // Texture blending/shading

                    // Apply offset to texture lookup
                    // Initial texture coords
                    a = (((x << 1)) + ((y << 1)) * width) * 4;

                    // Simple refraction offset
                    let xoff = ((rippleMap[mapInd - 1] - rippleMap[mapInd + 1]) >> 3); // x gradient
                    let yoff = ((rippleMap[mapInd - mapWidth] - rippleMap[mapInd + mapWidth]) >> 3); // y gradient

                    // prevent out of bounds
                    if (x + xoff < 0 || x + xoff >= width) xoff = 0;
                    if (y + yoff < 0 || y + yoff >= height) yoff = 0;

                    // Lookup texture pixel with offset
                    b = (((x << 1) + xoff) + ((y << 1) + yoff) * width) * 4;

                    // Copy pixel data
                    rippleData.data[a] = textureData.data[b];
                    rippleData.data[a + 1] = textureData.data[b + 1];
                    rippleData.data[a + 2] = textureData.data[b + 2];
                    rippleData.data[a + 3] = 255;

                    // Expand to 2x2 block (upscaling) to match canvas size
                    rippleData.data[a + 4] = rippleData.data[a];
                    rippleData.data[a + 5] = rippleData.data[a + 1];
                    rippleData.data[a + 6] = rippleData.data[a + 2];
                    rippleData.data[a + 7] = 255;

                    rippleData.data[a + width * 4] = rippleData.data[a];
                    rippleData.data[a + width * 4 + 1] = rippleData.data[a + 1];
                    rippleData.data[a + width * 4 + 2] = rippleData.data[a + 2];
                    rippleData.data[a + width * 4 + 3] = 255;

                    rippleData.data[a + width * 4 + 4] = rippleData.data[a];
                    rippleData.data[a + width * 4 + 5] = rippleData.data[a + 1];
                    rippleData.data[a + width * 4 + 6] = rippleData.data[a + 2];
                    rippleData.data[a + width * 4 + 7] = 255;

                    mapInd++;
                }
                mapInd += 2;
            }

            ctx.putImageData(rippleData, 0, 0);
            animationRef.current = requestAnimationFrame(animate);
        };

        loadImage();

        const handleResize = () => {
            // Basic resize handling - reinit
            if (texture) init();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (canvas) canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-brand-primary">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover block"
            />
            {/* Blending Overlay */}
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-hard-light pointer-events-none" />
        </div>
    );
};

export default WaterRippleEffect;
