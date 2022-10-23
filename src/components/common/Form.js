

export default function Form({ className, onSubmit, children }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit && onSubmit();
    }
    return (
        <form className={"form " + (className ? className : "")} onSubmit={handleSubmit}>
            {children}
        </form>
    );
}
