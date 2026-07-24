import LightRays from "../LightRays";

function Hero() {
    return (
        <div className="absolute inset-0 bottom-0 -z-10 items-center">
            <LightRays
                raysOrigin="top-center"
                raysColor="#6633ee"
                raysSpeed={1}
                lightSpread={1.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.2}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1.5}
                saturation={2}
            />
        </div>
    );
}

export default Hero;
