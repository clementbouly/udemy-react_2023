import * as Dialog from "@radix-ui/react-dialog";
import { PrimaryButton, SecondaryButton } from "../../UI/Buttons/Buttons";

export function Modal({ children, isOpen, setIsOpen, actionFn, actionText }) {
	console.log(actionText);
	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay bg-white opacity-25 data-[state=open]:animate-overlayShow fixed inset-0" />
				<Dialog.Content className="DialogContent text-stone-900 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
					<Dialog.Close asChild>
						<button className="absolute top-4 right-4 font-bold text-stone-950 hover:text-stone-900 focus:outline-none">X</button>
					</Dialog.Close>
					{children}
					<hr className="my-3 border-stone-400" />
					<div className="mt-3 flex gap-2 justify-end">
						<Dialog.Close asChild>
							<SecondaryButton>Close</SecondaryButton>
						</Dialog.Close>
						{actionText && <PrimaryButton onSubmit={actionFn} onClick={actionFn}>{actionText}</PrimaryButton>}
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
