import { 
  DiPython, DiJavascript1, DiMysql
} from 'react-icons/di';
import { 
  SiR, SiPandas, SiNumpy, SiScikitlearn,
  SiAmazonaws, SiMicrosoftazure, SiVisualstudiocode, 
  SiJupyter, SiPowerbi, SiTableau, SiMicrosoftexcel,
  SiPostgresql, SiGooglesheets, SiAlteryx, SiGoogledatastudio, SiSnowflake
} from 'react-icons/si';
import { TbBrandGoogleAnalytics, TbReportAnalytics, TbBrandMysql } from 'react-icons/tb';
import { BsDatabaseCheck } from 'react-icons/bs';
import { MdOutlineCleaningServices, MdOutlineDataExploration } from 'react-icons/md';
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';

// Updated skills data with React Icons - focused on Data Analytics
export const skills = [
  // Data Analytics Core Skills
  {
    name: "Data Cleaning",
    icon: MdOutlineCleaningServices,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Data Validation",
    icon: BsDatabaseCheck,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Data Exploration",
    icon: MdOutlineDataExploration,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Statistical Analysis",
    icon: FaChartLine,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Business Intelligence",
    icon: TbReportAnalytics,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Data Storytelling",
    icon: FaChartPie,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },
  {
    name: "Dashboard Design",
    icon: FaChartBar,
    color: "#00C4FF",
    category: "Data Analytics Core Skills"
  },

  // Data Tools & Platforms
  {
    name: "Power BI",
    icon: SiPowerbi,
    color: "#F2C811",
    category: "Data Tools & Platforms"
  },
  {
    name: "Excel",
    icon: SiMicrosoftexcel,
    color: "#217346",
    category: "Data Tools & Platforms"
  },
  {
    name: "Tableau",
    icon: SiTableau,
    color: "#E97627",
    category: "Data Tools & Platforms"
  },
  {
    name: "SQL",
    icon: TbBrandMysql,
    color: "#4479A1",
    category: "Data Tools & Platforms"
  },
  {
    name: "MySQL",
    icon: DiMysql,
    color: "#4479A1",
    category: "Data Tools & Platforms"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    category: "Data Tools & Platforms"
  },
  {
    name: "Google Analytics",
    icon: TbBrandGoogleAnalytics,
    color: "#E37400",
    category: "Data Tools & Platforms"
  },
  {
    name: "Google Data Studio",
    icon: SiGoogledatastudio,
    color: "#4285F4",
    category: "Data Tools & Platforms"
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
    color: "#0F9D58",
    category: "Data Tools & Platforms"
  },

  // Programming Languages
  {
    name: "Python",
    icon: DiPython,
    color: "#3776ab",
    category: "Programming Languages"
  },
  {
    name: "R",
    icon: SiR,
    color: "#276DC3",
    category: "Programming Languages"
  },
  {
    name: "JavaScript",
    icon: DiJavascript1,
    color: "#F7DF1E",
    category: "Programming Languages"
  },

  // Data Analysis Libraries
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
    category: "Data Analysis Libraries"
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#013243",
    category: "Data Analysis Libraries"
  },
  {
    name: "Jupyter",
    icon: SiJupyter,
    color: "#F37626",
    category: "Data Analysis Libraries"
  },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
    color: "#F7931E",
    category: "Data Analysis Libraries"
  },

  // Advanced Analytics
  {
    name: "Snowflake",
    icon: SiSnowflake,
    color: "#29B5E8",
    category: "Advanced Analytics"
  },
  {
    name: "Alteryx",
    icon: SiAlteryx,
    color: "#00B1E5",
    category: "Advanced Analytics"
  },
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    color: "#007ACC",
    category: "Advanced Analytics"
  },
  {
    name: "Azure",
    icon: SiMicrosoftazure,
    color: "#0078D4",
    category: "Advanced Analytics"
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    color: "#FF9900",
    category: "Advanced Analytics"
  }
];
// Updated Component to render skills with React Icons - with tooltip on hover
export const SkillIcon = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-white text-dark text-xs font-semibold px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap">
        {skill.name}
      </div>

      {/* Icon with glow effect */}
      <div className="p-4 rounded-xl bg-dark-light/60 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.1)]">
        <IconComponent 
          size={32} 
          color={skill.color} 
          style={{ 
            filter: 'brightness(1.4) drop-shadow(0 0 4px rgba(255,255,255,0.25))', 
            mixBlendMode: 'lighten' 
          }}
        />
      </div>
    </div>
  );
};
