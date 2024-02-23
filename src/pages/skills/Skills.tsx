import '../skills/Skills.css';
import { SkillData } from '../../utils/dataConstant';

interface SkillsProps {
    skillname ?: string;
    skillImage ?: string;
  }


const Skills: React.FC<SkillsProps> = ({skillname,skillImage}) => {
    return (
        <div className='skill-container'>
           <div className="row section-intro-about">
            <div className="col-twelve">
            <h1>Let me show my Skills</h1>
           </div>   		
        </div> 
            <div className='row'>                            
            {
                SkillData.map((x,i)=>(
                  <div className='col-two'> 
                    <div className='skill-card skl-nm'>
                       <div className='skill-icon'>
                           <img src={x.image} alt="" />
                       </div>
                       <h6>{x.skill}</h6>
                    </div> 
                  </div>
                ))
            }
                 

                
                    {/* <div className='skill-container'>
                        {               
                            SkillData.map((data,i)=> (   
                                <div className='col-three'>                             
                                <div className='skill-card'>
                                   <div className='skill-icon'>
                                    <img src={data.image} alt="" />
                                   </div>
                                   <div>
                                    <h4>{data.skill}</h4>
                                   </div>
                                </div>
                                </div>
                            ))                              
                        }
                    </div>                                */}         
            </div>
        </div>
    )
}
export default Skills;