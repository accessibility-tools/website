
import styled from 'styled-components';

const MobileCenter = styled.div`
@media (max-width: 800px){
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;

export default MobileCenter;
