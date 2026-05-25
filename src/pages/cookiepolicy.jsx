import { useEffect } from "react";

function CookiePolicy() {

    useEffect(() => {
        document.title = "Cookie Policy - Ataage Digital Companion";
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
                data-id="001673e0-c9e2-4419-b4cb-cbb9e2eda55c"
                data-type="iframe">
            </div>
        </main>
    );
}

export default CookiePolicy;