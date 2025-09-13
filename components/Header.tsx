import DropDownMenu from './DropDownMenu'

export default function Header() {
    return (
        <header className="grid grid-cols-2 bg-slate-800 items-center p-4">
            <h1 className="text-end text-4xl font-black text-white text-shadow-lg">Chat App NextJs</h1>
            <div className="flex justify-end mr-10 gap-5 items-center">
                <p className="text-white">Hola (Nombre Usuario)</p>
                <DropDownMenu />
            </div>
        </header>
    )
}
