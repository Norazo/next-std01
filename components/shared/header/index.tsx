import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteName } from "@/lib/constants";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <Image src="/images/logo.svg" alt={siteName} width={48} height={48}
                        priority={true} />
                        <span className="hidden lg:block text-2xl font-bold ml-3">{siteName}</span>
                    </Link>
                </div>
                <div className="flex-end">
                    <Button>
                        <UserIcon />
                    </Button>
                    <Button>
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;