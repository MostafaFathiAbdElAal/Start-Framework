import NavBar from "../components/NavBar/NavBar"
import imgWarning from "../imgs/exclamation-warning-round-red-icon.svg"
import DocumentTitle from 'react-document-title'
export default function WarningPath() {
    return <>
        <DocumentTitle title="Error 404" />
        <NavBar />
        <section
            className="text-white h-screen w-full flex flex-col justify-start pt-40 items-center bg-black bg-opacity-90">
            <img className="w-40 select-none mb-4" src={imgWarning} alt="Warning path" />
            <h2 className="text-4xl font-semibold text-center">
                Error 404 : Page Not Found </h2>
            <p className="text-center font-semibold text-base translate-y-full">
                It looks like you've taken a wrong turn.<br />Why not head back to our homepage and start your search from there?
            </p>
        </section>
    </>
}
