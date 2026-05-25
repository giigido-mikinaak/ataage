import { useEffect } from "react";

function Terms() {
    useEffect(() => {
        document.title = "Tems of Service - Ataage Digital Companion";
    }, []);

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
                data-id="e6a8b943-0c78-4d47-8f08-156b02d31982"
                data-type="iframe">
            </div>
        </main>
    );
}

export default Terms;