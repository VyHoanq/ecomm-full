
"use client";

import { Button, Modal } from "flowbite-react";
import { CornerDownLeft, Headphones, HelpingHandIcon, MessageCircleMore, TruckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 text-black dark:text-white'>
                <HelpingHandIcon />
                <span>Help</span>
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Need help with Shopping</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-6">
                        <Link href="tel:12345678" className="flex items-center space-x-3 text-black dark:text-white">
                            <div className="flex items-center w-8 h-8 bg-neutral-300 justify-center rounded-full">
                                <Headphones className="text-black " />
                            </div>
                            <span>Call : +84 796 28 50</span>
                        </Link>
                        <Link href="/trash" className="flex items-center space-x-3 text-black dark:text-white">
                            <div className="flex items-center w-8 h-8 bg-neutral-300 justify-center rounded-full">
                                <TruckIcon className="text-black " />
                            </div>
                            <span>Trash your order</span>
                        </Link>
                        <Link href="tel:12345678" className="flex items-center space-x-3 text-black dark:text-white">
                            <div className="flex items-center w-8 h-8 bg-neutral-300 justify-center rounded-full">
                                <CornerDownLeft className="text-black " />
                            </div>
                            <span>Return and Refunds </span>
                        </Link>
                        <Link href="tel:12345678" className="flex items-center space-x-3 text-black dark:text-white">
                            <div className="flex items-center w-8 h-8 bg-neutral-300 justify-center rounded-full">
                                <MessageCircleMore className="text-black " />
                            </div>
                            <span>Chat with Us</span>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
