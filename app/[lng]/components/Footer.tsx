import { DateTime } from 'luxon'

const Footer = () => {
  const date = DateTime.now().toFormat('yyyy')

  return (
    <footer className="flex justify-center mt-auto border-t-2 border-dark-700 bg-dark-900 text-dark-400 px-20 py-10">
      <span>Copyright @ {date} Kristof Erdei</span>
    </footer>
  )
}

export default Footer
