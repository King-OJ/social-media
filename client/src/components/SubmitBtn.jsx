/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

export default function SubmitBtn( { text , actionText }) {

const navigation = useNavigation();
const isSubmitting = navigation.state === 'submitting';

  return (
    <button 
        type='submit'
        disabled={isSubmitting} 
        className="capitalize bg-primary500 px-4 md:px-8 py-1 rounded-md text-sm md:text-lg font-semibold">
        {isSubmitting ? actionText : text}           
    </button>
  )
}
