
'use client'
import Input from '@/app/components/common/Input'
import Button from '@/app/components/common/Button'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="flex gap-2">
                <Input style='text-md text-white w-full p-3 rounded-md bg-transparent border-2 border-gray-200 focus:outline-none'
                name='Email Address'></Input>
                <Button style="bg-red-600 rounded text-2xl font-bold text-white w-64 py-1 hover:bg-red-700"
                onClick={() => console.log("test")}>Get Started</Button>
            </div>
        </main>
    );
}