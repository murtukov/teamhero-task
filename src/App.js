import './App.css';
import Table from "./components/Table";
import StringField from "./components/fields/StringField";
import TagsField from "./components/fields/TagsField";
import testData from "./test-data";
import EmailField from "./components/fields/EmailField";

function App() {
    return (
        <div className="App">
            <Table data={testData}>
                <StringField title='First Name' source='firstName' />
                <StringField title='Last Name' source='lastName' />
                <EmailField title='Email' source='email' />
                <TagsField title='Tags' source='skills' />
            </Table>
        </div>
    );
}

export default App;
