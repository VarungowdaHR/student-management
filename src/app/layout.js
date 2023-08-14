import Navbar from "@/modules/dashboard/components/Navbar"
import "./global.css"
import {Inter} from 'next/font/google'

const inter=Inter({
    weight:['400','500','600','700'],
    subsets:['latin'],
    variable:'--font-inter'
})

export const metadata={
    'title':"student-management",
    'discription':"software to manage students"
}
export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className={`bg-primary-palewhite ${inter.variable} font-sans`} >
                <div >
                    <Navbar />
                </div>
                <main className="w-full h-full">
                    {children}
                </main> 
            </body>
        </html>
    )
}