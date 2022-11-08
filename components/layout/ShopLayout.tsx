import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
    title,
    pageDescription,
    imageFullUrl,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )}
            </Head>

            <nav> {/* navbar*/}</nav>
            {/* sidebar*/}
            <main
                style={{
                    margin: "80px auto",
                    maxWidth: "1440px",
                    padding: "opx 30px",
                }}
            >
                {children}
            </main>
            {/*footer*/}
            <footer>{/*TODO: footer*/}</footer>
        </>
    );
};
