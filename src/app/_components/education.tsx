import EducationItem from "./educationCard";

export default function Education() {
    return (
        <div>
            <EducationItem
                type="University"
                name="Wayne State"
                duration="May 2024 - Present"
                location="Detroit, MI"
                gpa="N/A"
                keyClasses={[
                    "CSC2110: Computer Science I",
                    "CSC2200: Computer Science II"
                ]}
            />
            <EducationItem
                type="Community College"
                name="Washtenaw"
                duration="May 2023 - Present"
                location="Ann Arbor, MI"
                gpa="4.00"
                keyClasses={[
                    "MATH 197: Linear Algebra",
                    "MATH 293: Calculus III",
                    "CIS 120: Linux/UNIX I: Fundamentals"
                ]}
            />
            <EducationItem
                type="High School"
                name="Northville"
                duration="Sep 2021 - Present"
                location="Northville, MI"
                gpa="4.00"
                keyClasses={[
                    "AP Computer Science A",
                    "AP Calculus BC",
                    "AP Physics C (Mechanics and E&M)", 
                    "AP Chemistry"
                ]}
            />
        </div>
    )
}                   