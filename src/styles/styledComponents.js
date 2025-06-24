import styled from 'styled-components'

export const Wrap = styled.div`
   width: 100%;
   height: 68px;
   overflow-x: hidden;
   background-color: lightslategray;
`

export const Input = styled.input`
   width: 800px;
   margin: 0 auto;
   outline: white;
   border-radius: 5px;
   height: ${(props) => props.$height || '15px'};
   font-size: ${(props) => props.$fontSize || '1rem'};
`

export const Button = styled.button`
   color: white;
   border: none;
   padding: 10px 20px;
   font-weight: 600;
   font-size: 1rem;
   border-radius: 4px;
   cursor: pointer;
   background-color: ${(props) => props.$backgrundColor || '#3b82f6'};
   width: ${(props) => props.$width || '100%'};

   &:hover {
      background-color: #2563eb;
   }
`