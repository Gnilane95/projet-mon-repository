import React from 'react'
import ContentCardInfo from './ContentCardInfo';
import {
  GrGooglePlus,
  GrPinterest,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";

export default function CardLeft() {
  return (
    <div className="">
      <img
        src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
        alt=""
        className="w-1/4"
      />
      <div className="bg-primary-dark w-1/4 p-7">
        <p className="capitalize text-2xl font-semibold text-white text-center">
          General information
        </p>
        <div>
          <ContentCardInfo
            src=" img/téléchargement (4).webp"
            label="Name :"
            title="Agathe DIOUF"
          />
          <ContentCardInfo
            src="img/téléchargement (1).webp"
            label="Location :"
            title="Rouen"
          />
          <ContentCardInfo
            src=" img/téléchargement (17).webp"
            label=""
            title="agathegnilanediouf@gmail.com"
          />
          <ContentCardInfo
            src=" img/téléchargement (14).webp"
            label=" "
            title="+33 07 72 14 80 41"
          />
          <ContentCardInfo
            src=" img/téléchargement (3).webp"
            label=""
            title="www.linkedin.com/in/agathe-diouf/"
          />
        </div>
        <div className=" flex justify-center pt-5 text-accent-light gap-7">
          <GrGooglePlus />
          <GrPinterest />
          <GrFacebookOption />
          <GrTwitter />
        </div>
      </div>
    </div>
  );
}
