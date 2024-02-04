import './TextField.css';

interface TextFieldProps {
    value: string;
    onChange: (value: string) => void,
    placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({value, onChange, placeholder}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }
    return(
        <input className='textfield' type='text' value={value} onChange={handleChange} placeholder={placeholder}/>
    )
}

export default TextField;