import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
    const defaultFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    const [formData, setFormData] = useState(defaultFormData);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));

    }
    const handleValidation = () => {
        const newErrors = {};
        !formData.name.trim() ? newErrors.name = 'Name is required' : newErrors.name = '';
        !formData.email.trim() ? newErrors.email = 'Name is required' : (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) ? newErrors.email = "Invalid email format" : newErrors.email = '';
        !formData.subject.trim() ? newErrors.subject = 'Name is required' : newErrors.subject = '';
        !formData.message.trim() ? newErrors.message = 'Name is required' : newErrors.message = '';

        setErrors(newErrors);
        const validated = Object.values(newErrors).filter(v => v !== '').length === 0;
        return validated;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            setLoading(true);
            emailjs.send(
                "service_8pndop3",
                "template_ovsnbo7",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "8bBWxn6GPLA5CdGJS"
            )
                .then(() => {
                    setFormData(defaultFormData);
                    setErrors({});
                    setIsSubmit(false);
                })
                .catch((error) => {
                    console.error("Failed to send email:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setIsSubmit(true);
        }
    };
    useEffect(() => {
        if (isSubmit) {
            handleValidation(formData);
        }
    }, [formData])

    return (
        <div className="contact">
            <div className="contactContainer">
                <h1 className="pageHeading">Contact</h1>
            </div>
            <div className="contactForm">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input name="name" value={formData.name} type="text" placeholder="* Enter Your Name" style={{ borderColor: errors.name && 'red' }} className="name"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="error">{errors.name}</span>
                    </div>
                    <div>
                        <input name="email" value={formData.email} type="email" placeholder="* Enter Your Email" className="email" style={{ borderColor: errors.email && 'red' }}
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="error">{errors.email}</span>
                    </div>
                    <div>
                        <input name="subject" value={formData.subject} type="text" placeholder="* Enter Your Subject" className="subject" style={{ borderColor: errors.subject && 'red' }}
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="error">{errors.subject}</span>
                    </div>
                    <div>
                        <textarea name="message" value={formData.message} className="message" placeholder="* Your Message" rows="3" style={{ borderColor: errors.message && 'red' }}
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="error">{errors.message}</span>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
            <div className="footer">
                <p>© 2024 Shoeb Khan. All Rights Reserved.</p>
            </div>
        </div>
    )
}