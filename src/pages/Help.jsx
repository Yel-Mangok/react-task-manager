import contactData from "../data/contactData";
import PageHeader from "../components/PageHeader";

export default function Help(){
    return (
        <div>
            <PageHeader title="Help" />

            <p>
                Find answers to common wuestions.
            </p>
            <br />

            <article>
                <h3>Company Data:</h3>
                <br />
                <p>
                    Company name: <strong>{contactData.CompanyName}</strong>
                </p>
                <p>
                    Phone number: <strong>{contactData.PhoneNumber}</strong>
                </p>
                <p>
                    Mail address: <strong>{contactData.MailAddress}</strong>
                </p>
                <a href={contactData.linkedIn}>
                    <strong>LinkedIn account</strong>
                </a>
            </article>
        </div>
    );
}