import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import DocumentTitle from 'react-document-title'
export default function Contact() {
    return <>
        <DocumentTitle title="Contact" />
        <div className="container gap-3 pt-28 mb-10">
            <h2 className="text-[#2c3e50] font-bold uppercase text-center text-4xl mb-3">conatct section</h2>
            <div className="flex justify-center w-full text-[#2c3e50] items-center gap-4">
                <div className="w-20 h-1 bg-[#2c3e50]"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-20 h-1 bg-[#2c3e50]"></div>
            </div>
            <form className="w-full md:w-2/3 mx-auto px-5">
                <Input spanId="userName" name="Username: " type="text" placeholder="username" />
                <Input spanId="userAge" name="Age: " type="text" placeholder="userAge" />
                <Input spanId="userEmail" autoComplete="off" name="Email: " type="email" placeholder="userEmail" />
                <Input spanId="userPAssword" name="Password: " type="password" placeholder="userPassword" />
                <Button type="button" />
            </form>
        </div>
    </>
}
