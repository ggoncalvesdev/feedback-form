import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm/Index';

export function Widget() {

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end ">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear select-none">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}