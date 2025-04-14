import React, {useState} from 'react';

function InternationalRelationsContact() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Bu yerda serverga yuborish yoki alert qo'shish mumkin
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-8">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#01408e]">Admission Form</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="+998 xx xxx xx xx"
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={4}
                        className="w-full border px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="w-[80%] mx-auto block px-6 py-2 text-white bg-[#0a37b3] hover:bg-[#01408e] rounded-lg shadow transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InternationalRelationsContact;
