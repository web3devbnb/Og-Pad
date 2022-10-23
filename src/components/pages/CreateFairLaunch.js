import AddTokenAddress from "../common/AddTokenAddress";
import Steps from './../common/Steps';

export default function CreateFairLaunch() {
    return (
        <div className="launch container">
            <h1 className="title title--page">Create fair launch</h1>
            <Steps />
            <AddTokenAddress inputInfo="You will pay: 0 BUSD" />
        </div>
    );
}
