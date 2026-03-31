WORMS68K PARTY - README
=====================

Worms68k Party is a full clone of Worms World Party, optimized for the TI-89 and TI-89 Titanium graphing calculators.

--------------------------------------------------------------------------------
I. INSTALLATION GUIDE
--------------------------------------------------------------------------------

IMPORTANT: BACK UP YOUR DATA!
Worms68k Party is memory-intensive and pushes the TI-89 to its limits. Ensure 
you have backed up all important variables and programs. ARCHIVE EVERYTHING 
you aren't using to free up RAM.

Requirements:
- TI-89 or TI-89 Titanium calculator.
- Approximately 96 KB of storage space.
- TI-Connect (Windows) or TILP (Linux/macOS) software.

Steps:
1. Download and Extract: Extract the contents of Worms68kParty.zip.
2. Setup Folder: On your TI-89, create a new folder called 'worms' 
   ([2nd] [VAR-LINK], then [F1] -> 5:Create Folder).
3. Set Directory: Set 'worms' as your current directory (Type setFold(worms) on 
   the home screen).
4. Connect: Connect your calculator to your computer.
5. Transfer Files: Use TI-Connect or TILP to transfer the following files into 
   the 'worms' folder:
   - wgame.89z (Game Engine)
   - wmenu.89z (Menu System)
   - worms68k.89p (TI-Basic Loader)
   - wormsdat.89e (Game Data)
6. ARCHIVE EVERYTHING: Open [VAR-LINK], select all four files, and press 
   [F1] -> 8:Archive. Running from Archive is mandatory to prevent crashes.
7. Launch: On your home screen, type worms68k() and press [ENTER].

--------------------------------------------------------------------------------
II. PROJECT HISTORY & SYNOPSIS
--------------------------------------------------------------------------------

The journey of Worms68k Party began over 20 years ago in 2004. As a young 
programmer, Greg Miller set out to create a full clone of Worms World Party for 
the TI-89's Motorola 68000 processor. While an initial version was published, 
technical limitations and the 65k size limit prevented its completion.

In 2017, inspired by optimizations suggested by Lionel Debroux, the project 
underwent a scratch rewrite. This version established a rock-solid foundation, 
including a robust state machine and a unique "Mix-In" weapon system. However, 
a persistent camera bug eventually led to a hiatus.

Recently, with the aid of modern AI tools, the elusive bug was finally 
identified and fixed. This led to a final sprint in development, adding 
77 unique weapons, textured gray-scale maps, and a refined physics engine.

Today, Worms68k Party stands as a complete, ambitious fan project—a labor of 
love for the Worms franchise and the retro-computing community.

--------------------------------------------------------------------------------
(C) Greg Miller, 2026
Worms IP is owned by Team17 / Everplay Group.
This is a non-commercial fan project.
