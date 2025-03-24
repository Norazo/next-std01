
import { siteName } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="p-5 flex-center">
                <span className="text-sm text-muted-foreground">
                    &copy; {currentYear} {siteName}. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;