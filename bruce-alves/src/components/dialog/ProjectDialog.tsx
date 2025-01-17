import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
// import AwesomeSlider from "react-awesome-slider"; // Certifique-se de que a importação está correta
import "react-awesome-slider/dist/styles.css"; // Importação dos estilos do AwesomeSlider
import { ProjectType } from "@/i18n/config"; // Atualize o caminho conforme necessário.

interface Props {
    open: boolean;
    onClose: () => void;
    project?: ProjectType;
}

const ProjectDialog = ({ open, onClose, project }: Props) => {
    return (
        <Transition.Root show={open} as="div">
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-[#919191] dark:text-white sm:my-8 md:w-[800px]">
                                <div className="flex justify-end">
                                    <div className="bg-red-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <Icon
                                            icon="material-symbols:close"
                                            className="cursor-pointer text-2xl"
                                            onClick={onClose}
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 p-10">
                                    <div className="rounded-lg border border-[rgba(0,0,0,.125)]">
                                        <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                                            <Icon icon="emojione:red-circle" width={10} />
                                            <Icon icon="twemoji:yellow-circle" width={10} />
                                            <Icon icon="twemoji:green-circle" width={10} />
                                        </div>
                                        <div className="p-3">
                                            {/* <AwesomeSlider className="w-full" organicArrows={false}>
                                                {project?.images?.map((image, index) => (
                                                    <div data-src={image} key={index} />
                                                ))}
                                            </AwesomeSlider> */}
                                        </div>
                                    </div>

                                    <h2 className="mt-10 text-lg font-bold">{project?.title}</h2>
                                    <p className="text-sm">{project?.description}</p>

                                    <div className="mt-3 flex justify-center gap-3">
                                        {project?.technologies?.map((tech) => (
                                            <div className="text-black dark:text-white" key={tech.name}>
                                                <Icon icon={tech.class} fontSize="50px" />
                                                <p className="mt-1 text-center text-xs">{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ProjectDialog;
