import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EmailModal = ({ isOpen, onClose, email }) => {
    console.log("email ", email);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (email) {
            setContent(`Dear User,

            Welcome to our website! Below are your credentials for logging into the Dadmin website:
            
            - **Employee ID:** HG983
            - **Email ID:** ${email}
            - **Password:** Test@1234
            
            Please keep this information secure and do not share it with others. If you have any issues or need further assistance, feel free to contact our support team.
            
            Best regards,
            The Dadmin Team
            `);
        }
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Mock sending email. Replace this with your actual email-sending logic.
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, content }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                // You might want to handle success here (e.g., show a success message)
            } else {
                console.error('Failed to send email');
                // You might want to handle error here (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle network or other errors
        }

        onClose(); // Close the modal after sending the email
    };

    return (
        <Modal
            show={isOpen}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
            dialogClassName="modal-90w"
        >
            <Modal.Header closeButton>
                <Modal.Title>Share Credentials</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">To:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            readOnly
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Mail:</label>
                        <textarea
                            className="form-control"
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            rows="6"
                        />
                    </div>

                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                        <Button variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EmailModal;
