const DescriptionComponent = ({desc,sttDesc,updateDesc,updateSttDesc}) => {

    const txtSttDesc = ()=>{
        return <p
        onDoubleClick={changeSttDesc}
        >{desc}</p>
    };
    const frmSttDesc = ()=>{
        return <textarea
        onChange={changeDesc}
        onBlur={changeSttDesc}
        >{desc}</textarea>
    };
    const showSttDesc = ()=>{
        return sttDesc?txtSttDesc():frmSttDesc();
    };
    const changeSttDesc = ()=> updateSttDesc();
    const changeDesc = (e)=> updateDesc(e.target.value);

    return (
        <>
            {showSttDesc()}
        </>
    )
};

export default DescriptionComponent;