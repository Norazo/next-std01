import Image from "next/image";
import Link from "next/link";
import { siteName } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <Image src="/images/logo.svg" alt={`${siteName} Logo`} width={48} height={48}
                        priority={true} />
                        <span className="hidden lg:block text-2xl font-bold ml-3">{siteName}</span>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
}

export default Header;