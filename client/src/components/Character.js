const Character = ({ name, raids }) => {
    return (
        <div className='container-col auto radius-md pad-lg size-md'>
            <h1 className='text-center'>{name}</h1>
            <div className='underline-full'></div>
            <div className='container-col mg-top-md'>
                {raids.map((raid, index) => {
                    return (
                        <div className='container' key={index}>
                            <h3 className={`${!raid.status ? 'pointer' : 'strike pointer'}`}>{raid.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Character;
