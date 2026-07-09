// familyTreeData.js
// Higgins Family Tree data
// bioActive: "active"   = bio has real content, (Bio) link shown in tree
// bioActive: "inactive" = scaffold only, (Bio) link hidden in tree

const familyTreeData = {
  label: "Bartley Higgins : married to Mary Conroy born c. 1821",
  opened: true,
  bioActive: "active",
  bio: `Name:				#b##u#Bartley Higgins#!u##!b#

His death registration
<img src="images/BartleyHigginsDeathCert.png" alt="Bartley's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		c. 1802
Date of Death:		May 16, 1882
Place of Birth:		Lettercallow, Connemara
Place of Death:		Lettercallow, Connemara
Residence:			Lettercallow, Connemara (at time of death)

Place of Marriage:	Unknown
Date of Marriage:	Unknown

#b#Other Information#!b#
No other information available

#b#Spouse:			#u#Mary Conroy#!u##!b#
Date of Birth:		born c. 1821
Date of Death:		Nov. 26, 1911?
Place of Birth:		Lettercallow, Connemara
Place of Death:		Lettercallow, Connemara
Place of Residence:	Connemara (at time of death)

#b#Other Information#!b#
Aged 80 years on 1901 census by which time she was living with her son Sean
A Mary Higgins from Lettercallow died on November 26, 1911 aged 80. Possibly the same person but the age differs from census age by 10 years`,
  children: [
    {
      label: "Sean Higgins c. 1861-Feb 7, 1942",
      opened: true,
      bioActive: "active",
      bio: `Name:				#b##u#Sean Higgins#!u##!b#

He is on the extreme right in this photo with the broad hat
<img src="images/great_grandfather.jpg" alt="Sean Higgins" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		c. 1857-1861 (see Other Information below)
Date of Death:		Feb 7, 1942
Place of Birth:		Lettercallow, Connemara
Place of Death:		Lettercallow, Connemara
Residence:			Lettercallow, Connemara (at time of death)

Place of Marriage:	Unknown
Date of Marriage:	Unknown

#b#Other Information#!b#
No records survive for births prior to 1864. In these cases, date of birth must be deduced using age at the time of his death. However, it should be noted that age on death or census records (particularly the latter) is not always accurate.
The fact that he was listed as aged 40 on the 1901 census and 55 on the 1911 census is anomalous.

#b#Spouse:			#u#Mary O'Toole#!u##!b#
Date of Birth:		c. 1864
Date of Death:		Feb 7, 1949
Place of Birth:
Place of Death:

#b#Other Information#!b#
Her father was Patrick O'Toole and her mother was Catherine Cloherty. I cannot find them on the 1901 census; perhaps they were dead at that stage.
She died exactly 7 years after he did.`,
      children: [

        {
          label: "Bartley born Aug 4, 1888 : married to Mary McCabe",
          bioActive: "active",
          bio: `Name:				#b##u#Bartley Higgins#!u##!b#
Date of Birth:		Aug 4, 1888
Date of Death:		Unknown
Place of Birth:		Lettercallow, Connemara
Place of Death:		England???
Residence:			England???

Place of Marriage:	Unknown
Date of Marriage:	Unknown

#b#Other Information#!b#
He had a daughter Mary (born 1908) when he was approximately 19 years old. She was included in her grandfather's (Sean, Bartley's father) household in the 1911 census but Bartley himself was not in that household.
It seems that he left his family in Lettercallow and went to England where he married again (bigamously?) and had at least one more child.

#b#Spouse 1:			#u#Mary McCabe#!u##!b#
Date of Birth:		Feb 24, 1886
Date of Death:		Unknown
Place of Birth:		Lettercallow
Place of Death:

#b#Other Information#!b#
Her father was Martin and her mother was Bridget (nee Delap)

#b#Spouse 2:			#u#Unknown (England)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:

#b#Other Information#!b#
No information available`,
          children: [
            {
              label: "Mary born 1908 (Scotland)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Mary Higgins#!u##!b#
Date of Birth:		1908
Date of Death:
Place of Birth:		Scotland
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
            },
            {
              label: "Alice (Mervue) : married Gerry O'Leary",
              bioActive: "inactive",
              bio: `Name:				#b##u#Alice Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Mervue, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Gerry O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
              children: [
                { label: "Joan", bioActive: "inactive", bio: `Name:				#b##u#Joan O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Bertie", bioActive: "inactive", bio: `Name:				#b##u#Bertie O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Mary (New York)", bioActive: "inactive", bio: `Name:				#b##u#Mary O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			New York

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Bridie", bioActive: "inactive", bio: `Name:				#b##u#Bridie O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Claire (lives in Mervue) : married to Johnny Bartley", bioActive: "inactive", bio: `Name:				#b##u#Claire O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Mervue, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Johnny Bartley#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Patricia (deceased)", bioActive: "inactive", bio: `Name:				#b##u#Patricia O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Deceased

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            { label: "Bridie : nun in Scotland", bioActive: "inactive", bio: `Name:				#b##u#Bridie Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Scotland

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Nun in Scotland

#b#Spouse:			#u#N/A#!u##!b#` },
            {
              label: "Sean (Mervue)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Sean Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Mervue, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
              children: [
                { label: "Joe (Salthill)", bioActive: "inactive", bio: `Name:				#b##u#Joe Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Salthill, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Rita Ann Higgins (Mervue)", bioActive: "inactive", bio: `Name:				#b##u#Rita Ann Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Mervue, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Poet

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "7 other children", bioActive: "inactive", bio: `Name:				#b##u#Unknown#!u##!b#

#b#Other Information#!b#
7 other children of Sean Higgins (Mervue)` },
                { label: "Carmel Frost (Florida) : 2nd marriage", bioActive: "inactive", bio: `Name:				#b##u#Carmel Higgins (Frost)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Florida, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
2nd marriage of Sean Higgins (Mervue)

#b#Spouse:			#u#Frost#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Florida, USA

#b#Other Information#!b#` },
                { label: "Daughter : 2nd marriage", bioActive: "inactive", bio: `Name:				#b##u#Unknown Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#
Daughter from 2nd marriage of Sean Higgins (Mervue)` }
              ]
            },
            { label: "Willie Dubh (died in England)", bioActive: "inactive", bio: `Name:				#b##u#Willie Higgins (Dubh)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		England
Residence:			England

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Died in England

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Another born in England", bioActive: "inactive", bio: `Name:				#b##u#Unknown Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:		England
Place of Death:
Residence:

#b#Other Information#!b#
Born in England. No further information available.` }
          ]
        },

        {
          label: "Coleman June 8, 1890 in Lettercallow (lived in Palmyra Avenue, Galway) : married Anna, Pat Folan's sister : second wife was from Craughwell, Co. Galway",
          bioActive: "active",
          bio: `Name:				#b##u#Coleman Higgins#!u##!b#
Date of Birth:		June 8, 1890
Date of Death:
Place of Birth:		Lettercallow, Connemara
Place of Death:
Residence:			Palmyra Avenue, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
No further information available

#b#Spouse 1:			#u#Anna Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#
Sister of Pat Folan

#b#Spouse 2:			#u#Unknown#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:		Craughwell, Co. Galway
Place of Death:
Place of Residence:

#b#Other Information#!b#
From Craughwell, Co. Galway`,
          children: [
            { label: "John Patrick (Paddy)", bioActive: "inactive", bio: `Name:				#b##u#John Patrick (Paddy) Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Colmán (Dublin) - Oct 4, 1916", bioActive: "inactive", bio: `Name:				#b##u#Colmán Higgins#!u##!b#
Date of Birth:		Oct 4, 1916
Date of Death:
Place of Birth:
Place of Death:
Residence:			Dublin

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Bertie (Crawley, UK) : deceased", bioActive: "inactive", bio: `Name:				#b##u#Bertie Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Crawley, UK

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Deceased

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Willie Rua - Dec 20, 1917-?", bioActive: "inactive", bio: `Name:				#b##u#Willie Rua Higgins#!u##!b#
Date of Birth:		Dec 20, 1917
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            {
              label: "Nancy Wilson (Dublin)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Nancy Higgins (Wilson)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Dublin

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Wilson#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Dublin

#b#Other Information#!b#`,
              children: [
                { label: "Georgie Wilson : was on the Dublin team that beat Galway in the 1974 All-Ireland football final", bioActive: "inactive", bio: `Name:				#b##u#Georgie Wilson#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Was on the Dublin team that beat Galway in the 1974 All-Ireland football final

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            { label: "Gerard - England. Member of 2nd family", bioActive: "inactive", bio: `Name:				#b##u#Gerard Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			England

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Member of Coleman's 2nd family

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Mary - England. Member of 2nd family", bioActive: "inactive", bio: `Name:				#b##u#Mary Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			England

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Member of Coleman's 2nd family

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Michael - Wicklow. Member of 2nd family", bioActive: "inactive", bio: `Name:				#b##u#Michael Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Wicklow

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Member of Coleman's 2nd family

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Rita O'Connell - Menlo. Member of 2nd family", bioActive: "inactive", bio: `Name:				#b##u#Rita Higgins (O'Connell)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Menlo, Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Member of Coleman's 2nd family

#b#Spouse:			#u#O'Connell#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Menlo, Galway

#b#Other Information#!b#` }
          ]
        },

        {
          label: "Sean (Jack) Nov 12 1892; worked as a driver for Guinness in Dublin",
          bioActive: "active",
          bio: `Name:				#b##u#Sean (Jack) Higgins#!u##!b#
Date of Birth:		Nov 12, 1892
Date of Death:		Unknown
Place of Birth:		Lettercallow, Connemara
Place of Death:		Dublin?
Residence:			Dublin

Place of Marriage:	Unknown
Date of Marriage:	Unknown

#b#Other Information#!b#
He worked as a driver for Guinness. He would sometimes visit Lettercallow in his car (it is unclear if this was the car he drove for Guinness or his own personal vehicle). Mary Higgins Connolly from Oughterard remembered that he was always on alert to ensure that the local children didn't go near the car, a fact that didn't amuse her even in her late seventies.

#b#Spouse:			#u#Unknown#!u##!b#
Date of Birth:		Unknown
Date of Death:		Unknown
Place of Birth:
Place of Death:

#b#Other Information#!b#
No other information on spouse`,
          children: [
            { label: "Helena", bioActive: "inactive", bio: `Name:				#b##u#Helena Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Margeurita", bioActive: "inactive", bio: `Name:				#b##u#Margeurita Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Violet", bioActive: "inactive", bio: `Name:				#b##u#Violet Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Sean (killed in motorcycle accident aged 20)", bioActive: "inactive", bio: `Name:				#b##u#Sean Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#
Killed in motorcycle accident aged 20` }
          ]
        },

        {
          label: "Patrick Mar 19 1895-Oct 20 1903 : died aged 8. The death registration says 'probably phthisis' (a type of tuberculosis)",
          bioActive: "active",
          bio: `Name:				#b##u#Patrick Higgins#!u##!b#
Date of Birth:		Mar 19, 1895
Date of Death:		Oct 20, 1903
Place of Birth:		Lettercallow, Connemara
Place of Death:		Lettercallow, Connemara
Residence:        lettercallow

Place of Marriage:	N/A
Date of Marriage:	N/A

#b#Other Information#!b#
Died aged 8. His death registration lists the cause of death as 'probably phthisis' (a type of tuberculosis).
<img src="images/patrick_higgins_death.png" alt="Patrick Higgins death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u#N/A#!u##!b#`
        },

        {
          label: "Bridget Jun 24, 1897-c.1996 (Slate, Lettermore) : married deLappe",
          bioActive: "inactive",
          bio: `Name:				#b##u#Bridget Higgins (deLappe)#!u##!b#
Date of Birth:		Jun 24, 1897
Date of Death:		c. 1996
Place of Birth:		Lettercallow, Connemara
Place of Death:		Slate, Lettermore
Residence:			Slate, Lettermore

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#deLappe#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Slate, Lettermore

#b#Other Information#!b#`,
          children: [
            { label: "Marie - deceased c.2010 (Pittsburgh)", bioActive: "inactive", bio: `Name:				#b##u#Marie deLappe#!u##!b#
Date of Birth:
Date of Death:		c. 2010
Place of Birth:
Place of Death:		Pittsburgh, USA
Residence:			Pittsburgh, USA

#b#Other Information#!b#
Deceased c. 2010

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Catherine (Carlow)", bioActive: "inactive", bio: `Name:				#b##u#Catherine deLappe#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carlow

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Bridget (Pittsburgh)", bioActive: "inactive", bio: `Name:				#b##u#Bridget deLappe#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Pittsburgh, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Paddy (Santa Barbara, CA)", bioActive: "inactive", bio: `Name:				#b##u#Paddy deLappe#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Santa Barbara, CA, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Margaret (Baby) : deceased c.2004 (Lettermore)", bioActive: "inactive", bio: `Name:				#b##u#Margaret (Baby) deLappe#!u##!b#
Date of Birth:
Date of Death:		c. 2004
Place of Birth:
Place of Death:		Lettermore
Residence:			Lettermore

#b#Other Information#!b#
Deceased c. 2004

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Sean died aged 3", bioActive: "inactive", bio: `Name:				#b##u#Sean deLappe#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#
Died aged 3` }
          ]
        },

        {
          label: "Mary Higgins Folan Jan 22, 1901 - Jun 4, 1945",
          bioActive: "active",
          bio: `Name:				#b##u#Mary Folan (nee Higgins)#!u##!b#

Her marriage registration to Pat Folan
<img src="images/pat_folan_mary_higgins_wedding.png" alt="Our grandparents wedding registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		Jan 22, 1901
Date of Death:		Jun 4, 1945
Place of Birth:		Lettercallow, Connemara
Place of Death:		Rathcairn, Athboy, Co. Meath
Residence:			  Rathcairn, Athboy, Co. Meath

Place of Marriage:	Rosmuc, Co. Galway
Date of Marriage:	Sep 4, 1916

#b#Other Information#!b#
She married Pat Folan when she was 15 (4 months shy of her 16th birthday) and he was 22 (note that the marriage registration correctly lists his age as 22 but hers as 20). Her parents did not approve so they married in Rosmuc. They then moved to Lettermore where she had 11 children. In December 1935 they moved to Rathcarn, Co. Meath as part of a government resettlement scheme where they had 3 more children. She died in 1945 following an illness.

#b#Spouse:			#u#Pat Folan#!u##!b#

He is on the extreme left in this photo with the flatcap.
<img src="images/great_grandfather.jpg" alt="Pat Folan" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		February 28, 1894
Date of Death:		November 7, 1968
Place of Birth:		Lettermore
Place of Death:		London

#b#Other Information#!b#
He emigrated to London some years after the death of his wife (by that time most, if not all, of his family had emigrated to London) where he died at the age of 74`,
          children: [
            {
              label: "Paudeen Dec 20, 1917?-? (London)",
              bioActive: "active",
              bio: `Name:				#b##u#Paudeen Folan#!u##!b#

This image was taken on December 19, 1934 at the wedding of his uncle Willie Higgins. Coincidentally, it was also the day before his 17th birthday.
<img src="images/paudeen.jpg" alt="Paudeen Folan" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		Dec 20, 1917?
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
              children: [
                { label: "Kathleen", bioActive: "inactive", bio: `Name:				#b##u#Kathleen Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Michael", bioActive: "inactive", bio: `Name:				#b##u#Michael Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "John", bioActive: "inactive", bio: `Name:				#b##u#John Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Patrick", bioActive: "inactive", bio: `Name:				#b##u#Patrick Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Girl - deceased", bioActive: "inactive", bio: `Name:				#b##u#Unknown Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#
Deceased. No further information.` }
              ]
            },
            {
              label: "Mary May 19, 1919-? (Boston) : married to Coleen Mulkerrins",
              bioActive: "inactive",
              bio: `Name:				#b##u#Mary Folan (Mulkerrins)#!u##!b#
Date of Birth:		May 19, 1919
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Coleen Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Boston, USA

#b#Other Information#!b#`,
              children: [
                { label: "Josaphine deceased (London)", bioActive: "inactive", bio: `Name:				#b##u#Josaphine Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		London
Residence:			London

#b#Other Information#!b#
Deceased

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Michael deceased (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Michael Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		Boston, USA
Residence:			Boston, USA

#b#Other Information#!b#
Deceased

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Coleen (London)", bioActive: "inactive", bio: `
Name:				#b##u#Coleen Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Kevin (London)", bioActive: "inactive", bio: `Name:				#b##u#Kevin Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Patsy (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Patsy Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "John (Boston)", bioActive: "inactive", bio: `Name:				#b##u#John Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Teresa (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Teresa Mulkerrins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Nan Aug 18 1920 - Aug 16 2004 (Cashel, Connemara) : Married to Paddy Connolly",
              bioActive: "active",
              bio: `Name:				#b##u#Nan Connolly (nee Folan)#!u##!b#

Her marriage certificate is shown in the thumbnail
<img src="images/mom_and_dads_marriage_cert.jpg" alt="Mom & Dad's Marriage Cert" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Her birth registration certificate is shown in the thumbnail
<img src="images/moms_birth_registration.png" alt="Nan's birth registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Pictured with her sister Mary Mulkerrins (she is on the left)
<img src="images/our_mom_and_aunt_mary.jpg" alt="Mom & Mary Mulkerrins" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		Aug 18, 1920
Date of Death:		Aug 15, 2004
Place of Birth:		Lettermore
Place of Death:
Residence:			Cashel, Co. Galway

Date of Marriage:	Nov 22, 1941
Place of Marriage:	London

#b#Other Information#!b#
Moved from Lettermore to Rathcarn, Co. Meath in December 1935 and moved to England when she was 19.

#b#Spouse:			#u#Paddy Connolly#!u##!b#
Date of Birth:		March 7, 1909
Date of Death:		March 16, 1988
Place of Birth:		Toombeola, Roundstone, Co. Galway
Place of Death:		Galway Hospital
Place of Residence:	Cashel, Co. Galway

#b#Other Information#!b#`,
              children: [
                {
                  label: "Paddy Sep 21, 1942- (Florida) : Married to Barbara",
                  bioActive: "active",
                  bio: `Name:				#b##u#Paddy Connolly#!u##!b#
Date of Birth:		Sep 21, 1942
Date of Death:
Place of Birth:		London
Place of Death:
Residence:			Florida, USA

Place of Marriage:	New York, USA
Date of Marriage:

#b#Other Information#!b#
Moved to Ireland with the family in 1959 and then moved to the US in Mar 1964. Lived for over 50 years in New York before moving to Florida in 2014 where he has become friends with his second cousin Carmel Higgins Frost who also lives in Florida. He is also friendly with her brother Joe Higgins who visits there regularly.

email:		patrickconnolly569@hotmail.com
Mobile:		001 914 329 2027

#b#Spouse:			#u#Barbara#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Florida, USA

#b#Other Information#!b#`,
                  children: [
                    { label: "Patrick Sep 10, 1967-Oct 19, 2005 (Los Angeles)", bioActive: "inactive", bio: `Name:				#b##u#Patrick Connolly#!u##!b#
Date of Birth:		Sep 10, 1967
Date of Death:		Oct 19, 2005
Place of Birth:
Place of Death:		Los Angeles, USA
Residence:			Los Angeles, USA

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                    {
                      label: "Keith Mar 21, 1973- (Long Island NY)",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Keith Connolly#!u##!b#
Date of Birth:		Mar 21, 1973
Date of Death:
Place of Birth:
Place of Death:
Residence:			Long Island, NY, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
                      children: [
                        { label: "Lacey", bioActive: "inactive", bio: `Name:				#b##u#Lacey Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    {
                      label: "Courtney Mar 21, 1977- (Los Angeles) : married to Jason",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Courtney Connolly#!u##!b#
Date of Birth:		Mar 21, 1977
Date of Death:
Place of Birth:
Place of Death:
Residence:			Los Angeles, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Jason#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Los Angeles, USA

#b#Other Information#!b#`,
                      children: [
                        { label: "Hunter", bioActive: "inactive", bio: `Name:				#b##u#Hunter#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    { label: "Reid Oct 29, 1989- (Austin Texas)", bioActive: "inactive", bio: `Name:				#b##u#Reid Connolly#!u##!b#
Date of Birth:		Oct 29, 1989
Date of Death:
Place of Birth:
Place of Death:
Residence:			Austin, Texas, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
                  ]
                },
                {
                  label: "Jimmy Mar 21, 1946- (London) : married to Anne Mahony (died on Aug 15, 2007)",
                  bioActive: "active",
                  bio: `Name:				#b##u#Jimmy Connolly#!u##!b#
Date of Birth:		Mar 21, 1946
Date of Death:
Place of Birth:		London
Place of Death:
Residence:			London

Place of Marriage:	London
Date of Marriage:

#b#Other Information#!b#
Moved to Ireland with the family in 1959 and then moved back to London in Aug 1964 where he has lived since.

email:		info@amyst.co.uk
Mobile:		0044 771 190 7115

#b#Spouse:			#u#Ann Mahony#!u##!b#
Date of Birth:
Date of Death:		Aug 15, 2007
Place of Birth:		Listowel, Co. Kerry
Place of Death:		London
Place of Residence:	London

#b#Other Information#!b#`,
                  children: [
                    {
                      label: "Susan Oct 25, 1969- (London) : married to Nick Heather",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Susan Connolly (Heather)#!u##!b#
Date of Birth:		Oct 25, 1969
Date of Death:
Place of Birth:		London
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Nick Heather#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	London

#b#Other Information#!b#`,
                      children: [
                        { label: "Stephen", bioActive: "inactive", bio: `Name:				#b##u#Stephen Heather#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                        { label: "Amy", bioActive: "inactive", bio: `Name:				#b##u#Amy Heather#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    {
                      label: "Karen Oct 20, 1975- (Leeds) : married to David Brindle",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Karen Connolly (Brindle)#!u##!b#
Date of Birth:		Oct 20, 1975
Date of Death:
Place of Birth:
Place of Death:
Residence:			Leeds

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#David Brindle#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Leeds

#b#Other Information#!b#`,
                      children: [
                        { label: "Harry", bioActive: "inactive", bio: `Name:				#b##u#Harry Brindle#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                        { label: "Stanley", bioActive: "inactive", bio: `Name:				#b##u#Stanley Brindle#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                        { label: "Maya", bioActive: "inactive", bio: `Name:				#b##u#Maya Brindle#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    { label: "Brian Jan 22, 1980- : partner Liz", bioActive: "inactive", bio: `Name:				#b##u#Brian Connolly#!u##!b#
Date of Birth:		Jan 22, 1980
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Liz#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
                  ]
                },
                {
                  label: "Sean May 11, 1955- (Oranmore) : married to Mairead Hughes",
                  bioActive: "active",
                  bio: `Name:				#b##u#Sean Connolly#!u##!b#
<img src="images/sean_connolly.jpg" alt="Sean Connolly" class="bio-thumbnail" onclick="openLightbox('images/sean_connolly.jpg','Sean Connolly')">
Date of Birth:		May 11, 1955
Date of Death:
Place of Birth:		London
Place of Death:
Residence:			Oranmore, Co. Galway

Date of Marriage:	Feb 16, 1979
Place of Marriage:	Galway

#b#Other Information#!b#
Moved to Ireland with the family in 1959. Lived in Cashel, Connemara until he was 18 and then moved to Galway

email:		connolly.maree@gmail.com
Mobile:		00353 87 2219183

#b#Spouse:			#u#Mairead Hughes#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:		Claremorris, Co. Mayo
Place of Death:
Place of Residence:	Oranmore, Co. Galway

#b#Other Information#!b#`,
                  children: [
                    {
                      label: "Eavan Aug 12, 1979- (Wicklow) : married to Andy Hayes",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Eavan Connolly (Hayes)#!u##!b#
Date of Birth:		Aug 12, 1979
Date of Death:
Place of Birth:
Place of Death:
Residence:			Wicklow

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Andy Hayes#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Wicklow

#b#Other Information#!b#`,
                      children: [
                        { label: "Ruby Jul 17, 2014-", bioActive: "inactive", bio: `Name:				#b##u#Ruby Hayes#!u##!b#
Date of Birth:		Jul 17, 2014
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    {
                      label: "Emmet Feb 14, 1981- (Dublin) : married to Paula Henihan",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Emmet Connolly#!u##!b#
Date of Birth:		Feb 14, 1981
Date of Death:
Place of Birth:
Place of Death:
Residence:			Dublin

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Paula Henihan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Dublin

#b#Other Information#!b#`,
                      children: [
                        { label: "Finn Jan 31, 2014-", bioActive: "inactive", bio: `Name:				#b##u#Finn Connolly#!u##!b#
Date of Birth:		Jan 31, 2014
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                      ]
                    },
                    { label: "Denise Sep 29, 1983- (Maynooth) : married to Darrell Flinn", bioActive: "inactive", bio: `Name:				#b##u#Denise Connolly (Flinn)#!u##!b#
Date of Birth:		Sep 29, 1983
Date of Death:
Place of Birth:
Place of Death:
Residence:			Maynooth, Co. Kildare

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Darrell Flinn#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Maynooth, Co. Kildare

#b#Other Information#!b#` },
                    { label: "Lisa May 29, 1990- (Naas, Co. Kildare)", bioActive: "inactive", bio: `Name:				#b##u#Lisa Connolly#!u##!b#
Date of Birth:		May 29, 1990
Date of Death:
Place of Birth:
Place of Death:
Residence:			Naas, Co. Kildare

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
                  ]
                },
                {
                  label: "Michael Sep 20, 1959- (New Jersey) : married to Isabel",
                  bioActive: "active",
                  bio: `Name:				#b##u#Michael Connolly#!u##!b#
Date of Birth:		Sep 20, 1959
Date of Death:
Place of Birth:		Cashel, Connemara
Place of Death:
Residence:			New Jersey, USA

Place of Marriage:	New Jersey, USA
Date of Marriage:

#b#Other Information#!b#
Moved to the US in Feb 1988

email:		michaelconnolly59@comcast.net
Mobile:		001 201 317 2788

#b#Spouse:			#u#Isabel#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:		Colombia
Place of Death:
Place of Residence:	New Jersey, USA

#b#Other Information#!b#`
                },
                {
                  label: "Anne Sep 11, 1961- (New York)",
                  bioActive: "active",
                  bio: `Name:				#b##u#Anne Connolly#!u##!b#
Date of Birth:		Sep 11, 1961
Date of Death:
Place of Birth:		Cashel, Connemara
Place of Death:
Residence:			New York, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Spent 18 years in London before moving to the US

Mobile:		001 914 417 8044

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
                }
              ]
            },
            {
              label: "Sean Oct 17, 1922-Aug 15, 2013 (Boston) : married to Monica McDonagh from Cashel, Connemara",
              bioActive: "inactive",
              bio: `Name:				#b##u#Sean Folan#!u##!b#
Date of Birth:		Oct 17, 1922
Date of Death:		Aug 15, 2013
Place of Birth:
Place of Death:		Boston, USA
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Monica McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:		Cashel, Connemara
Place of Death:
Place of Residence:	Boston, USA

#b#Other Information#!b#`,
              children: [
                { label: "Marie Oct 2, 1953-Mar 3, 2003 (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Marie Folan#!u##!b#
Date of Birth:		Oct 2, 1953
Date of Death:		Mar 3, 2003
Place of Birth:
Place of Death:		Boston, USA
Residence:			Boston, USA

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                {
                  label: "Phil Jul 20, 1955- (San Francisco) : married to ? Hicks",
                  bioActive: "inactive",
                  bio: `Name:				#b##u#Phil Folan (Hicks)#!u##!b#
Date of Birth:		Jul 20, 1955
Date of Death:
Place of Birth:
Place of Death:
Residence:			San Francisco, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Hicks#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	San Francisco, USA

#b#Other Information#!b#`,
                  children: [
                    { label: "Molly Mar 29, 1993-", bioActive: "inactive", bio: `Name:				#b##u#Molly Hicks#!u##!b#
Date of Birth:		Mar 29, 1993
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                    { label: "Sean May 2, 1995-", bioActive: "inactive", bio: `Name:				#b##u#Sean Hicks#!u##!b#
Date of Birth:		May 2, 1995
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                  ]
                },
                { label: "Una Jul 29, 1956- (New Hampshire) : married to Mike Aiken", bioActive: "inactive", bio: `Name:				#b##u#Una Folan (Aiken)#!u##!b#
Date of Birth:		Jul 29, 1956
Date of Death:
Place of Birth:
Place of Death:
Residence:			New Hampshire, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Mike Aiken#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	New Hampshire, USA

#b#Other Information#!b#` },
                {
                  label: "John Feb 3, 1960- (Boston) : Married to Maryann Folan",
                  bioActive: "inactive",
                  bio: `Name:				#b##u#John Folan#!u##!b#
Date of Birth:		Feb 3, 1960
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Maryann Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Boston, USA

#b#Other Information#!b#`,
                  children: [
                    { label: "Aine Jun 24, 1998-", bioActive: "inactive", bio: `Name:				#b##u#Aine Folan#!u##!b#
Date of Birth:		Jun 24, 1998
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                    { label: "Sean (or Martin??) Oct 6, 2000-", bioActive: "inactive", bio: `Name:				#b##u#Sean/Martin Folan#!u##!b#
Date of Birth:		Oct 6, 2000
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                  ]
                },
                {
                  label: "Carmel May 8, 1963- (Boston) : Married to Kevin O'Leary",
                  bioActive: "inactive",
                  bio: `Name:				#b##u#Carmel Folan (O'Leary)#!u##!b#
Date of Birth:		May 8, 1963
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Kevin O'Leary#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Boston, USA

#b#Other Information#!b#`,
                  children: [
                    { label: "Adrienne Mar 10, 1991-", bioActive: "inactive", bio: `Name:				#b##u#Adrienne O'Leary#!u##!b#
Date of Birth:		Mar 10, 1991
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                    { label: "Brian Feb 28, 1993-", bioActive: "inactive", bio: `Name:				#b##u#Brian O'Leary#!u##!b#
Date of Birth:		Feb 28, 1993
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` },
                    { label: "Claire Sep 30, 1996-", bioActive: "inactive", bio: `Name:				#b##u#Claire O'Leary#!u##!b#
Date of Birth:		Sep 30, 1996
Date of Death:
Place of Birth:
Place of Death:
Residence:

#b#Other Information#!b#` }
                  ]
                }
              ]
            },
            {
              label: "Bridie Jun 14, 1924- (Carraroe) : married to Tommy McDonagh (killed in motorcycle accident in 1958)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Bridie Folan (McDonagh)#!u##!b#
Date of Birth:		Jun 14, 1924
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carraroe, Co. Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Tommy McDonagh#!u##!b#
Date of Birth:
Date of Death:		1958
Place of Birth:
Place of Death:
Place of Residence:	Carraroe, Co. Galway

#b#Other Information#!b#
Killed in motorcycle accident in 1958`,
              children: [
                { label: "Mary (Camus)", bioActive: "inactive", bio: `Name:				#b##u#Mary McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Camus

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Petey (Camus)", bioActive: "inactive", bio: `Name:				#b##u#Petey McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Camus

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Margaret/Mags (Maam)", bioActive: "inactive", bio: `Name:				#b##u#Margaret (Mags) McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Maam

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Annie (Carraroe)", bioActive: "inactive", bio: `Name:				#b##u#Annie McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carraroe

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Brid (Carraroe)", bioActive: "inactive", bio: `Name:				#b##u#Brid McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carraroe

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Tommy (Carraroe)", bioActive: "inactive", bio: `Name:				#b##u#Tommy McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carraroe

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Partick (Carraroe)", bioActive: "inactive", bio: `Name:				#b##u#Patrick McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Carraroe

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Nora MdDonagh Nov 13, 1925-? (Rathcarn, Co. Meath)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Nora McDonagh (nee Folan)#!u##!b#
Date of Birth:		Nov 13, 1925
Date of Death:
Place of Birth:
Place of Death:
Residence:			Rathcarn, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Rathcarn, Co. Meath

#b#Other Information#!b#`,
              children: [
                { label: "Micheal (Rathcarn)", bioActive: "inactive", bio: `Name:				#b##u#Micheal McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Rathcarn, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Maureen Flood (Navan)", bioActive: "inactive", bio: `Name:				#b##u#Maureen McDonagh (Flood)#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Navan, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Flood#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Navan, Co. Meath

#b#Other Information#!b#` },
                { label: "Colm (Trim)", bioActive: "inactive", bio: `Name:				#b##u#Colm McDonagh#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Trim, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Winnie Mar 7, 1927-? (London) : Married to Paddy Callinan",
              bioActive: "inactive",
              bio: `Name:				#b##u#Winnie Folan (Callinan)#!u##!b#
Date of Birth:		Mar 7, 1927
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Paddy Callinan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	London

#b#Other Information#!b#`,
              children: [
                { label: "Gerald Oct 4, 1958- (London)", bioActive: "inactive", bio: `Name:				#b##u#Gerald Callinan#!u##!b#
Date of Birth:		Oct 4, 1958
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Barbara Apr 20, 1929-? (London) : married to Jimmy Glennon",
              bioActive: "inactive",
              bio: `Name:				#b##u#Barbara Folan (Glennon)#!u##!b#
Date of Birth:		Apr 20, 1929
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Jimmy Glennon#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	London

#b#Other Information#!b#`,
              children: [
                { label: "Jimmy (London)", bioActive: "inactive", bio: `Name:				#b##u#Jimmy Glennon#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "John (London)", bioActive: "inactive", bio: `Name:				#b##u#John Glennon#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Patsy (London)", bioActive: "inactive", bio: `Name:				#b##u#Patsy Glennon#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Coleen May 28, 1930- (San Francisco) : married to Jude Grealish",
              bioActive: "inactive",
              bio: `Name:				#b##u#Coleen Folan (Grealish)#!u##!b#
Date of Birth:		May 28, 1930
Date of Death:
Place of Birth:
Place of Death:
Residence:			San Francisco, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Jude Grealish#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	San Francisco, USA

#b#Other Information#!b#`,
              children: [
                { label: "Teresa (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Teresa Grealish#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Daughter (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Unknown Grealish#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

#b#Other Information#!b#` },
                { label: "Son (San Francisco)", bioActive: "inactive", bio: `Name:				#b##u#Unknown Grealish#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			San Francisco, USA

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Bartley Mar 8, 1933- (Rathcarn, Co. Meath) : married to Maureen",
              bioActive: "inactive",
              bio: `Name:				#b##u#Bartley Folan#!u##!b#
Date of Birth:		Mar 8, 1933
Date of Death:
Place of Birth:
Place of Death:
Residence:			Rathcarn, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Maureen#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Rathcarn, Co. Meath

#b#Other Information#!b#`,
              children: [
                { label: "Bartley (London)", bioActive: "inactive", bio: `Name:				#b##u#Bartley Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Marian (London)", bioActive: "inactive", bio: `Name:				#b##u#Marian Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "John (Boston)", bioActive: "inactive", bio: `Name:				#b##u#John Folan#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            { label: "Marcus Aug 12, 1934-? (Boston)", bioActive: "inactive", bio: `Name:				#b##u#Marcus Folan#!u##!b#
Date of Birth:		Aug 12, 1934
Date of Death:
Place of Birth:
Place of Death:
Residence:			Boston, USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            {
              label: "Philomena Apr 28, 1937- (London) : married to Gerry Daly",
              bioActive: "inactive",
              bio: `Name:				#b##u#Philomena Folan (Daly)#!u##!b#
Date of Birth:		Apr 28, 1937
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Gerry Daly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	London

#b#Other Information#!b#`,
              children: [
                { label: "Jerimiah (London)", bioActive: "inactive", bio: `Name:				#b##u#Jerimiah Daly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Son (London)", bioActive: "inactive", bio: `Name:				#b##u#Unknown Daly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

#b#Other Information#!b#` },
                { label: "Daughter (London)", bioActive: "inactive", bio: `Name:				#b##u#Unknown Daly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

#b#Other Information#!b#` },
                { label: "Daughter (London)", bioActive: "inactive", bio: `Name:				#b##u#Unknown Daly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Monica Sep 16, 1939- (Killorglin, Co. Kerry) : married to Don Moroney",
              bioActive: "inactive",
              bio: `Name:				#b##u#Monica Folan (Moroney)#!u##!b#
Date of Birth:		Sep 16, 1939
Date of Death:
Place of Birth:
Place of Death:
Residence:			Killorglin, Co. Kerry

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Don Moroney#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:	Killorglin, Co. Kerry

#b#Other Information#!b#`,
              children: [
                { label: "Lisa Ann (Trim)", bioActive: "inactive", bio: `Name:				#b##u#Lisa Ann Moroney#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Trim, Co. Meath

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Stephen (Wicklow)", bioActive: "inactive", bio: `Name:				#b##u#Stephen Moroney#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Wicklow

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            {
              label: "Agnes  Jul 13, 1942 (London)",
              bioActive: "inactive",
              bio: `Name:				#b##u#Agnes Folan#!u##!b#
Date of Birth:		Jul 13, 1942
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
              children: [
                { label: "Dawn - deceased (London)", bioActive: "inactive", bio: `Name:				#b##u#Dawn#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		London
Residence:			London

#b#Other Information#!b#
Deceased` },
                { label: "Mark & Twin (London)", bioActive: "inactive", bio: `Name:				#b##u#Mark & Twin#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

#b#Other Information#!b#` }
              ]
            }
          ]
        },

        {
          label: "Willie Jun 24, 1903-c.197?",
          bioActive: "active",
          bio: `Name:				#b##u#Willie Higgins#!u##!b#

The image on the right shows Willie Higgins on his wedding day, December 19, 1934. He is on the left beside his wife Nora Stanton. His nephew Paudeen Folan (who I think might have been best man) is on the right. The woman middle right is, I presume, Nora Stanton's mother.
<img src="images/willie_higgins_wedding_day.jpg" alt="Wedding of Willie Higgins" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Date of Birth:		Jun 24, 1903
Date of Death:		c. 197?
Place of Birth:		Lettercallow, Connemara
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:	December 19, 1934

#b#Other Information#!b#
The marriage registration of Willie Higgins to Nora Stanton
<img src="images/willie_higgins_marriage_registration.png" alt="Marriage Registration of Willie Higgins" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u#Nora Stanton#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
          children: [
            {
              label: "Mary c.1935-Nov 5, 2014 (Oughterard) : married to Connolly from Oughterard",
              bioActive: "active",
              bio: `Name:				#b##u#Mary Connolly (nee Higgins)#!u##!b#
Date of Birth:		c. 1935
Date of Death:		Nov 5, 2014
Place of Birth:		Lettercallow, Connemara
Place of Death:		Oughterard, Connemara
Residence:			Oughterard, Connemara (at time of death)

Place of Marriage:	USA
Date of Marriage:	Unknown

#b#Other Information#!b#
She is responsible for a lot of the information in this family tree.
She spent a number of years in the USA where she married, before returning to her husband's home place in Oughterard.

#b#Spouse:			#u#Connolly#!u##!b#
Date of Birth:
Date of Death:		As far as I know, he is still alive
Place of Birth:		Oughterard, Connemara
Place of Death:
Place of Residence:	Oughterard

#b#Other Information#!b#
No other information on him`,
              children: [
                { label: "Marie (USA)", bioActive: "inactive", bio: `Name:				#b##u#Marie Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Billy (USA)", bioActive: "inactive", bio: `Name:				#b##u#Billy Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			USA

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Joe (London)", bioActive: "inactive", bio: `Name:				#b##u#Joe Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Tommy (Oughterard)", bioActive: "inactive", bio: `Name:				#b##u#Tommy Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Oughterard

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "Nora Ann (Moycullen)", bioActive: "inactive", bio: `Name:				#b##u#Nora Ann Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Moycullen, Co. Galway

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
                { label: "James (Australia)", bioActive: "inactive", bio: `Name:				#b##u#James Connolly#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Australia

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
              ]
            },
            { label: "Liam (Wales)", bioActive: "inactive", bio: `Name:				#b##u#Liam Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Wales

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Sean - deceased (England)", bioActive: "inactive", bio: `Name:				#b##u#Sean Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		England
Residence:			England

#b#Other Information#!b#
Deceased

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Cole (Northampton)", bioActive: "inactive", bio: `Name:				#b##u#Cole Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Northampton

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Ann (London)", bioActive: "inactive", bio: `Name:				#b##u#Ann Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Padraic (Lettercallow)", bioActive: "inactive", bio: `Name:				#b##u#Padraic Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Lettercallow, Connemara

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Seamus - died aged 50 (England)", bioActive: "inactive", bio: `Name:				#b##u#Seamus Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:		England
Residence:			England

#b#Other Information#!b#
Died aged 50

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` },
            { label: "Peggy (Leitrim)", bioActive: "inactive", bio: `Name:				#b##u#Peggy Higgins#!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:			Leitrim

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#` }
          ]
        }

      ]
    }
  ]
};

// End of familyTreeData