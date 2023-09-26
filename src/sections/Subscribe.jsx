import Button from "../components/Button"

const Subscribe = () => {
    return (
        <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
            <h3 className="font-palanquin text-4xl font-bold lg:max-w-md leading-[68px]">
                Sign Up for
                <span className="text-coral-red"> Updates </span>&
                Newsletter</h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className="input" />
                <div className="flex justify-end max-sm:w-full">
                    <Button label="Sign Up" />
                </div>
            </div>
        </section>
    )
}

export default Subscribe