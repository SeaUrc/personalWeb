interface EducationItemProps {
    type: string;
    name: string;
    duration: string;
    location: string;
    gpa?: string;
    keyClasses?: string[];
  }
  
  const EducationItem: React.FC<EducationItemProps> = ({
    type,
    name,
    duration,
    location,
    gpa,
    keyClasses
  }) => {
    return (
      <div className="mb-14">
        <div className="flex items-baseline">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="ml-4 text-gray-400">{type}</span>
        </div>
        <div className="mt-2 flex items-center text-gray-400">
          <span>{duration}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
          {gpa && (
            <>
              <span className="mx-2">•</span>
              <span>GPA: {gpa}</span>
            </>
          )}
        </div>
        {keyClasses && keyClasses.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Key Classes:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {keyClasses.map((cls, index) => (
                <li key={index} className="bg-gray-300 rounded-lg px-3 py-2 text-sm text-black">
                  {cls}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  export default EducationItem;