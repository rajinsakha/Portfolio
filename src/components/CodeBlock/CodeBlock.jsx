
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const codeSnippet = `
function Portfolio() {
  const [skills, setSkills] = useState([
    'React', 'Next.js', 'TypeScript'
  ]);

  useEffect(() => {
    // Continuously improving...
    setSkills(prev => [...prev, 'New Skill']);
  }, []);

  return (
    <div className="portfolio">
      {skills.map(skill => (
        <Skill key={skill} name={skill} />
      ))}
    </div>
  );
}
`.trim()

export function CodeBlock() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 5) // Adjust speed as needed
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <motion.div
      className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-[#ff004f] shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <pre>
        <code>{displayedCode}</code>
      </pre>
    </motion.div>
  )
}

