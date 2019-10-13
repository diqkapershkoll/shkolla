import React from 'react'
import Navigation, { NavigationItem, FancyItem, BOTH, AUTH_ONLY, NO_AUTH_ONLY } from '../../components/Navigation'
import Audiofile from './components/audiofile'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import style from './CSS/Ligjerata.module.css'

import song from "./../../audio/Kresha.mp3"

export default function Ligjerata() {
    const [state, setState] = React.useState({
        kl10: true,
        kl11: true,
        kl12: true,
        gjsh: true,
        gja: true,
        gjgj: true,
        matematik: true,
        kimi: true,
        fizik: true,
        biologji: true,
        gjeografi: true,
        tik: true,
        psikologji: true,
        filozofi: true,
        astronomi: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navigation>
                <NavigationItem link="/" type={BOTH}>Home</NavigationItem>
                <NavigationItem link="/about" type={BOTH}>About Us</NavigationItem>
                <FancyItem link="/login" type={NO_AUTH_ONLY}>Login</FancyItem>
                <NavigationItem link="/profile" type={AUTH_ONLY}>Profile</NavigationItem>
                <FancyItem link="/signout" type={AUTH_ONLY}>Sign Out</FancyItem>
            </Navigation>

            <div className='conainer-fluid mt-4'>
                <div className='row'>
                    <div className='col-lg-2' >
                        <div className="col-lg-12">
                            <div className='pl-4'>
                                <h3>Zgjedh Lenden</h3>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel control={<Switch color='default' checked={state.kl10} onChange={handleChange('kl10')} value="kl10" />} label="Kl10 " />
                                        <FormControlLabel control={<Switch color='default' checked={state.kl11} onChange={handleChange('kl11')} value="kl11" />} label="Kl11 " />
                                        <FormControlLabel control={<Switch color='default' checked={state.kl12} onChange={handleChange('kl12')} value="kl12" />} label="Kl12 " />
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className='pl-4 pt-5'>
                                <h3>Zgjedh Lenden</h3>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel control={<Switch color="default" checked={state.gjsh} onChange={handleChange('gjsh')} value="GJ_SH" />} label="Gjuhe Shqipe" />
                                        <FormControlLabel control={<Switch color="default" checked={state.gja} onChange={handleChange('gja')} value="gja" />} label="Gjuhe Angleze" />
                                        <FormControlLabel control={<Switch color="default" checked={state.gjgj} onChange={handleChange('gjgj')} value="gjgj" />} label="Gjuhe Angleze" />
                                        <FormControlLabel control={<Switch color="default" checked={state.matematik} onChange={handleChange('matematik')} value="Matematik" />} label="Matematik" />
                                        <FormControlLabel control={<Switch color="default" checked={state.kimi} onChange={handleChange('kimi')} value="Kimi" />} label="Kimi" />
                                        <FormControlLabel control={<Switch color="default" checked={state.fizik} onChange={handleChange('fizik')} value="fizik" />} label="Fizik" />
                                        <FormControlLabel control={<Switch color="default" checked={state.biologji} onChange={handleChange('biologji')} value="biologji" />} label="Biologji" />
                                        <FormControlLabel control={<Switch color="default" checked={state.gjeografi} onChange={handleChange('gjeografi')} value="gjeografi" />} label="Gjeografi" />
                                        <FormControlLabel control={<Switch color="default" checked={state.tik} onChange={handleChange('tik')} value="tik" />} label="TIK" />
                                        <FormControlLabel control={<Switch color="default" checked={state.psikologji} onChange={handleChange('psikologji')} value="psikologji" />} label="Psikologji" />
                                        <FormControlLabel control={<Switch color="default" checked={state.filozofi} onChange={handleChange('filozofi')} value="filozofi" />} label="Filozofi" />
                                        <FormControlLabel control={<Switch color="default" checked={state.astronomi} onChange={handleChange('astronomi')} value="astronomi" />} label="Astronomi" />
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-10'>
                        <div className='row'>
                            {state.gjsh && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Gjuhe Shqipe</h1> : ""}
                            {state.kl10 && state.gjsh ? <Audiofile titulli='kl10 Gjuhe Shqipe' muzika={song} /> : ""}
                            {state.kl11 && state.gjsh ? <Audiofile titulli='kl11 Gjuhe Shqipe' muzika={song} /> : ""}
                            {state.kl12 && state.gjsh ? <Audiofile titulli='kl12 Gjuhe Shqipe' muzika={song} /> : ""}

                            {state.gja && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Gjuhe Angleze</h1> : ""}
                            {state.kl10 && state.gja ? <Audiofile titulli='kl10 Gjuhe Angleze' muzika={song} /> : ""}
                            {state.kl11 && state.gja ? <Audiofile titulli='kl11 Gjuhe Angleze' muzika={song} /> : ""}
                            {state.kl12 && state.gja ? <Audiofile titulli='kl12 Gjuhe Angleze' muzika={song} /> : ""}

                            {state.gjgj && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Gjuhe Gjermane</h1> : ""}
                            {state.kl10 && state.gjgj ? <Audiofile titulli='kl10 Gjuhe Gjermane' muzika={song} /> : ""}
                            {state.kl11 && state.gjgj ? <Audiofile titulli='kl11 Gjuhe Gjermane' muzika={song} /> : ""}
                            {state.kl12 && state.gjgj ? <Audiofile titulli='kl12 Gjuhe Gjermane' muzika={song} /> : ""}

                            {state.matematik && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Matematik</h1> : ""}
                            {state.kl10 && state.matematik ? <Audiofile titulli='kl10 matematik' muzika={song} /> : ""}
                            {state.kl11 && state.matematik ? <Audiofile titulli='kl11 matematik' muzika={song} /> : ""}
                            {state.kl12 && state.matematik ? <Audiofile titulli='kl12 matematik' muzika={song} /> : ""}

                            {state.kimi && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Kimi</h1> : ""}
                            {state.kl10 && state.kimi ? <Audiofile titulli='kl10 kimi' muzika={song} /> : ""}
                            {state.kl11 && state.kimi ? <Audiofile titulli='kl11 kimi' muzika={song} /> : ""}
                            {state.kl12 && state.kimi ? <Audiofile titulli='kl12 kimi' muzika={song} /> : ""}

                            {state.fizik && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Fizik</h1> : ""}
                            {state.kl10 && state.fizik ? <Audiofile titulli='kl10 Fizik' muzika={song} /> : ""}
                            {state.kl11 && state.fizik ? <Audiofile titulli='kl11 Fizik' muzika={song} /> : ""}
                            {state.kl12 && state.fizik ? <Audiofile titulli='kl12 Fizik' muzika={song} /> : ""}

                            {state.biologji && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Biologji</h1> : ""}
                            {state.kl10 && state.biologji ? <Audiofile titulli='kl10 Biologji' muzika={song} /> : ""}
                            {state.kl11 && state.biologji ? <Audiofile titulli='kl11 Biologji' muzika={song} /> : ""}
                            {state.kl12 && state.biologji ? <Audiofile titulli='kl12 Biologji' muzika={song} /> : ""}

                            {state.gjeografi && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Gjeografi</h1> : ""}
                            {state.kl10 && state.gjeografi ? <Audiofile titulli='kl10 Gjeografi' muzika={song} /> : ""}
                            {state.kl11 && state.gjeografi ? <Audiofile titulli='kl11 Gjeografi' muzika={song} /> : ""}
                            {state.kl12 && state.gjeografi ? <Audiofile titulli='kl12 Gjeografi' muzika={song} /> : ""}

                            {state.tik && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>TIK</h1> : ""}
                            {state.kl10 && state.tik ? <Audiofile titulli='kl10 TIK' muzika={song} /> : ""}
                            {state.kl11 && state.tik ? <Audiofile titulli='kl11 TIK' muzika={song} /> : ""}
                            {state.kl12 && state.tik ? <Audiofile titulli='kl12 TIK' muzika={song} /> : ""}

                            {state.psikologji && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Psikologji</h1> : ""}
                            {state.kl10 && state.psikologji ? <Audiofile titulli='kl10 Psikologji' muzika={song} /> : ""}
                            {state.kl11 && state.psikologji ? <Audiofile titulli='kl11 Psikologji' muzika={song} /> : ""}
                            {state.kl12 && state.psikologji ? <Audiofile titulli='kl12 Psikologji' muzika={song} /> : ""}

                            {state.filozofi && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Filozofi</h1> : ""}
                            {state.kl10 && state.filozofi ? <Audiofile titulli='kl10 Filozofi' muzika={song} /> : ""}
                            {state.kl11 && state.filozofi ? <Audiofile titulli='kl11 Filozofi' muzika={song} /> : ""}
                            {state.kl12 && state.filozofi ? <Audiofile titulli='kl12 Filozofi' muzika={song} /> : ""}

                            {state.astronomi && (state.kl10 || state.kl11 || state.kl12) ? <h1 className='col-lg-12'>Astronomi</h1> : ""}
                            {state.kl10 && state.astronomi ? <Audiofile titulli='kl10 Astronomi' muzika={song} /> : ""}
                            {state.kl11 && state.astronomi ? <Audiofile titulli='kl11 Astronomi' muzika={song} /> : ""}
                            {state.kl12 && state.astronomi ? <Audiofile titulli='kl12 Astronomi' muzika={song} /> : ""}
                            {!state.kl10 && !state.kl11 && !state.kl12 ? <h3 className='ml-4 p-4'>Selekto te pakten nje klase qe te shohesh rezultate</h3> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
