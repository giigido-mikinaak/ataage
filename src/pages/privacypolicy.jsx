
import { useEffect } from "react";
function PrivacyPolicy() {

    useEffect(() => {

        const script = document.createElement("script");

        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);
    return (
        <main className="legal-page">
            <div name="termly-embed"
                data-id="fa5d5234-cf82-4236-9ccc-7c9c3a751e6c"
                data-type="iframe">
            </div>
        </main>
    );
}

export default PrivacyPolicy;