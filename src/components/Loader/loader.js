import Link from 'next/link';

export default function loader() {
    
    return <div className="loader">
        <div className="loading">
        <svg width="200" height="200" fillRule="evenodd">
                    
                    <circle id="orangeStroke" cx="100" cy="100" r="63.662" stroke="white" stroke-width="6" stroke-dasharray={ "200, 400"} fill="none" />
                    
                </svg>
        </div>
        
    </div>
}
