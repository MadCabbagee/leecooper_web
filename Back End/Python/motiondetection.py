import smtplib
from email.mime.text import MIMEText


# Function to send an email when
def send_email(subject, body):
    sender_email = "leecooper6329@gmail.com"  # Replace with your email address
    receiver_email = (
        "leecooper6329@gmail.com"  # Replace with the recipient's email address
    )
    password = "Skater29$"  # Replace with your email password

    message = MIMEText(body)
    message["Subject"] = subject
    message["From"] = sender_email
    message["To"] = receiver_email

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        server.quit()
        print("Email sent successfully")
    except Exception as e:
        print(f"Error: {e}")


# Simulated motion detection event
def detect_motion():
    return True  # Replace with your actual motion detection logic


# Main program
if __name__ == "__main__":
    if detect_motion():
        subject = "Motion Detected!"
        body = "Motion has been detected."
        send_email(subject, body)
