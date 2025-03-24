'use client';

import { siteName } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="/images/logo.svg" alt={`${siteName} Logo`} width={48} height={48}
                priority={true} />
            <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                <p className="text-destructive">
                    The page you are looking for does not exist or has been moved.
                </p>
            </div>
            <Button variant="outline" className="mt-4 ml-2" onClick={() => {
                window.location.href = "/";
            }}>
                Back to Home
            </Button>
        </div>
    );
}

export default NotFoundPage;