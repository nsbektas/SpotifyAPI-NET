﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using SpotifyAPIv1;
using SpotifyEventHandler = SpotifyAPIv1.SpotifyEventHandler;


namespace SpotifyAPI_Example
{
    public partial class Form1 : Form
    {
        SpotifyAPI spotify;
        SpotifyMusicHandler mh;
        SpotifyEventHandler eh;
        public Form1()
        {
            InitializeComponent();
            spotify = new SpotifyAPI();
            if(!SpotifyAPI.IsSpotifyRunning())
                spotify.RunSpotify();
            if (!SpotifyAPI.IsSpotifyWebHelperRunning())
                spotify.RunSpotifyWebHelper();
            spotify.Connect();
            mh = spotify.GetMusicHandler();
            eh = spotify.GetEventHandler();
        }
        private async void Form1_Load(object sender, EventArgs e)
        {
            spotify.Update();
            progressBar1.Maximum = (int)mh.GetCurrentTrack().GetLength() * 100;
            pictureBox1.Image = await spotify.GetMusicHandler().GetCurrentTrack().GetAlbumArtAsync(AlbumArtSize.SIZE_160);
            pictureBox2.Image = await spotify.GetMusicHandler().GetCurrentTrack().GetAlbumArtAsync(AlbumArtSize.SIZE_640);

            label1.Text = mh.GetCurrentTrack().GetTrackName();
            label2.Text = mh.GetCurrentTrack().GetArtistName();
            currentAlbumValue.Text = mh.GetCurrentTrack().GetAlbumName();

            label9.Text = mh.IsPlaying().ToString();
            label11.Text = ((int)(mh.GetVolume() * 100)).ToString();
            label7.Text = mh.IsAdRunning().ToString();

            eh.OnTrackChange += new SpotifyEventHandler.TrackChangeEventHandler(trackchange);
            eh.OnTrackTimeChange += new SpotifyEventHandler.TrackTimeChangeEventHandler(timechange);
            eh.OnPlayStateChange += new SpotifyEventHandler.PlayStateEventHandler(playstatechange);
            eh.OnVolumeChange += new SpotifyEventHandler.VolumeChangeEventHandler(volumechange);
            eh.SetSynchronizingObject(this);
            eh.ListenForEvents(true);
        }
        private void volumechange(VolumeChangeEventArgs e)
        {
            label11.Text = ((int)(mh.GetVolume() * 100)).ToString();
        }
        private void playstatechange(PlayStateEventArgs e)
        {
            label9.Text = e.playing.ToString();
        }
        private async void trackchange(TrackChangeEventArgs e)
        {
            progressBar1.Maximum = (int)mh.GetCurrentTrack().GetLength()*100;
            label1.Text = e.new_track.GetTrackName();
            label2.Text = e.new_track.GetArtistName();
            currentAlbumValue.Text = e.new_track.GetAlbumName();
            pictureBox1.Image = await e.new_track.GetAlbumArtAsync(AlbumArtSize.SIZE_160);
            pictureBox2.Image = await e.new_track.GetAlbumArtAsync(AlbumArtSize.SIZE_640);
            label7.Text = mh.IsAdRunning().ToString();
        }
        private void timechange(TrackTimeChangeEventArgs e)
        {
            label4.Text = formatTime(e.track_time) + "/" + formatTime(mh.GetCurrentTrack().GetLength());
            progressBar1.Value = (int)e.track_time*100;
        }
        private String formatTime(double sec)
        {
            TimeSpan span = TimeSpan.FromSeconds(sec);
            String secs = span.Seconds.ToString(), mins = span.Minutes.ToString();
            if (secs.Length < 2)
                secs = "0" + secs;
            return mins + ":" + secs;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            mh.Play();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            mh.Pause();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            mh.Previous();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            mh.Skip();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (SpotifyAPI.IsValidSpotifyURI(textBox1.Text))
                mh.PlayURL(textBox1.Text);
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBox1.Checked)
                mh.Mute();
            else
                mh.UnMute();
        }
    }
}