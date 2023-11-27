import React from 'react';
import { UseSample} from '../contexts/sample';

const Receives = ({value}) =>{

    return (
        // <SampleConsumer>
        //     {
        //         (sample) => (
        //             <div>
        //             현재 설정된 값: {sample.state.value}
        //             </div>
        //         )
        //     }

        // </SampleConsumer>
        <div>
            현재 설정된 값 : {value}
        </div>
    );
};
export default UseSample(Receives);