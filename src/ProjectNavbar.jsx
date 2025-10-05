import { Heart, MessageCircle, Search, User,  LayoutDashboard, FileSearch2, PieChart} from 'lucide-react';
import React,{ useState }  from 'react';
import logo from './assets/Pages/logo.png';
import Client from './ClientDashboard/Client.jsx';
import HomePage from './HomePage.jsx';
import Dashboard from './Dashboard.jsx';
import Marketplace from './MarketPlace.jsx';
const ProjectNavbar = ( ) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [activePage, setActivePage] = useState('home');
    return (
        <div className='min-h-screen bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-200' >
           <header className='bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-40 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-6'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <div className='flex shrink-0'>
                            <img src={logo} alt=""  className=' h-14 w-16 -ml-6 rounded-2xl '/>
                            <h1 className='ml-2 mt-2 text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>TechNova</h1>
                        </div>
                    </div>
                    <div className='hidden md:block flex-1 max-w-lg mx-8'>
                        <div className='relative'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'/>
                            <input type="text" placeholder='Search projects, skills...' value={ searchQuery } onChange={ (e) =>setSearchQuery(e.target.value)} className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90'/>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button className='p-2 text-gray-400 hover:text-gray-600 relative '>
                            <MessageCircle className='w-6 h-6'/>
                             <span className='absolute -top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>10</span>
                        </button>
                        <button onClick={()=> setActivePage("projectList")} className='p-2 text-gray-400 hover:text-gray-600 relative'>
                          <FileSearch2 className='w-7 h-7'/>
                        </button>
                        <button className='p-2 text-gray-400 hover:text-gray-600'>
                            <Heart className='w-7 h-7'/>
                        </button>
                        <button onClick={ () => setActivePage('fdashboard')} className='p-2 text-gray-400 hover:text-gray-600'>
                            <PieChart className='w-7 h-7'/>
                        </button>
                        <button onClick={()=> setActivePage("cdashboard")} className='p-2 text-gray-400 hover:text-gray-600'>
                            <LayoutDashboard className='w-7 h-7'/></button>
                        <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to bg-purple-600 rounded-full flex items-center justify-center '>
                            <User className='w-8 h-8 text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        { activePage === 'home' && <HomePage/>}
        { activePage ==='projectList' && <Marketplace onBack={() => setActivePage('home')}/>}
        {activePage === 'fdashboard' && <Dashboard onBack={() => setActivePage('home')} />}
        {activePage === 'cdashboard' && <Client onBack={() => setActivePage('home')} />}
    </div>

    );
}
export default ProjectNavbar;