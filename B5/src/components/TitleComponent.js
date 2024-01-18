const TitleComponent = ({ title,updateTitle, sttTitle, updateSttTitle }) => {

    const txtSttTitle = () => {
        return <h4 onDoubleClick={changeSttTitle} >{title}</h4>
    };
    const frmSttTitle = () => {
        return <input
            id="title"
            onChange={changeTitle}
            onBlur={changeSttTitle}
            type="text"
            name="title"
            value={title} />
    };
    const showSttTitle = () => {
        return sttTitle ? txtSttTitle() : frmSttTitle();
    };
    const changeSttTitle = () => updateSttTitle();
    const changeTitle = (e)=>{
        return updateTitle(e.target.value);
    } ;
    return (
        <>
            {showSttTitle()}
        </>
    )
};

export default TitleComponent;