import EducationItem from "./educationCard";

export default function Education() {
    return (
        <div>
            <EducationItem
                type="University"
               name="Carnegie Mellon University"
               duration={"Aug 2025 - Present"}
               location={"Pittsburgh, PA"}
               gpa="4.00"
               keyClasses={[
                    "15-122: Imperative Computation",
                    "15-150: Functional Programming",
                    "15-151: Discrete Mathematics",
                    "15-213: Intro to Computer Systems",
                    "21-242: Matrix Theory",
                    "21-266: Vector Calculus using Matrix Algebra"
               ]}
            />
            <EducationItem
                type="University"
                name="Wayne State"
                duration="May 2024 - December 2024"
                location="Detroit, MI"
                gpa="4.00"
                keyClasses={[
                    "CSC2110: Computer Science I"
                ]}
            />
            <EducationItem
                type="Community College"
                name="Washtenaw"
                duration="May 2023 - May 2025"
                location="Ann Arbor, MI"
                gpa="4.00"
                keyClasses={[
                    "MATH 197: Linear Algebra",
                    "MATH 293: Calculus III",
                    "MATH 295: Differential Equations",
                    "CIS 120: Linux/UNIX I: Fundamentals"
                ]}
            />
            <EducationItem
                type="High School"
                name="Northville"
                duration="Sep 2021 - May 2025"
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