import { supabase } from '../lib/supabase';

export async function signInWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function signUpWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/command-center` },
    });
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function handleSmartLaunch(email, password) {
  const trimmed = email.trim().toLowerCase();
  if (trimmed.endsWith('@gmail.com')) {
    await signInWithGoogle();
    return { action: 'oauth' };
  }
  const { data: signInData, error: signInErr } = await signInWithEmail(trimmed, password);
  if (!signInErr && signInData?.user) {
    return { action: 'dashboard', user: signInData.user };
  }
  const { data: signUpData, error: signUpErr } = await signUpWithEmail(trimmed, password);
  if (!signUpErr && signUpData?.user) {
    return { action: 'profile_setup', user: signUpData.user };
  }
  const alreadyRegistered = signUpErr?.message?.toLowerCase().includes('already registered');
  return {
    action: 'error',
    error: alreadyRegistered ? 'Incorrect password for registered candidate account' : (signUpErr?.message || signInErr?.message || 'Authentication failed'),
  };
}

export async function signOutUser() {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (err) {
    return { error: err };
  }
}

export async function getSessionUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    return { user: data?.user ?? null, error };
  } catch (err) {
    return { user: null, error: err };
  }
}
