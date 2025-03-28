import AgendaGoalsPreview from '@/_components/AgendaGoalsPreview/AgendaGoalsPreview';
import AvatarEditor from '@/_components/AvatarEditor/AvatarEditor';
import TitleTag from '@/_components/TitleTag/TitleTag';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getUserSession } from '@/_lib/auth/session';

async function Dashboard() {
    // On récupère l'heure actuel
    const hour = new Date().getHours();
    const session = await getUserSession();
    const user = session.user;
    return (
        <section className="Dashboard">
            <AvatarEditor />
            <TitleTag dataTitleTag={{ title: "Tableau de bord" }} />

            <div className="greetings-and-level">
                <div className="greetings">
                    <h2 >{hour > 18 ? "Bonsoir" : "Bonjour"}, <span className="username">
                        {user.firstName}
                    </span> !!
                    </h2>
                    <p>Bienvenu(e) sur ton tableau de bord personnel</p>
                </div>
                <div className="badges-zone level">
                    <FontAwesomeIcon icon={faSuitcase} />
                    {/* <span>{user.level}</span> */}
                </div>
            </div>

            <div className="infos-zone">
                <AgendaGoalsPreview dataAgendaGoalsPreview={{ title: "Tes prochains rendez-vous", isForMeeting: true }} />
                <AgendaGoalsPreview dataAgendaGoalsPreview={{ title: "Tes objectifs", isForMeeting: false }} />
            </div>
        </section>
    );
}

export default Dashboard;