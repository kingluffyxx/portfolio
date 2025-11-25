"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Calendar, MessageSquare, MapPin } from "lucide-react"
import { CIcon } from '@coreui/icons-react'
import { cibLinkedin } from '@coreui/icons'
import { SiGithub } from "@icons-pack/react-simple-icons"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BookingWidget } from "@/components/booking-calendar/booking-widget"

export function Contact() {
    const t = useTranslations('contact')
    const { elementRef, isVisible } = useScrollAnimation()
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    // Cal.com Event Type ID - à configurer dans .env.local
    const eventTypeId = process.env.NEXT_PUBLIC_CALCOM_EVENT_TYPE_ID || ""

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setFormState('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset après 5 secondes
            setTimeout(() => setFormState('idle'), 5000)
        } catch {
            setFormState('error')
            setTimeout(() => setFormState('idle'), 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section id="contact" className="py-12 md:py-24 lg:py-32 container" ref={elementRef as React.RefObject<HTMLElement>}>
            <div className="mx-auto max-w-4xl">
                {/* En-tête */}
                <div className="mb-12 text-center">
                    <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}>
                        {t('title')}
                    </h2>
                    <p className={`mt-4 text-lg text-muted-foreground scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Informations de contact */}
                <div className={`mb-8 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                        <div className="flex items-center gap-3 bg-card px-4 py-3 border rounded-xl">
                            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10">
                                <Mail className="w-4 h-4 text-primary" />
                            </div>
                            <a
                                href="mailto:xavier.adda@gmail.com"
                                className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                                xavier.adda@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3 bg-card px-4 py-3 border rounded-xl">
                            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10">
                                <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">
                                {t('locationValue')}
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-all">
                                <Link href="https://github.com/kingluffyxx" target="_blank" rel="noopener noreferrer">
                                    <SiGithub className="w-5 h-5" />
                                    <span className="sr-only">{t('github')}</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-all">
                                <Link href="https://www.linkedin.com/in/xavier-adda/" target="_blank" rel="noopener noreferrer">
                                    <CIcon icon={cibLinkedin} className="w-5 h-5" style={{ fill: '#0077b5' }} />
                                    <span className="sr-only">{t('linkedin')}</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs : Message / Réserver un appel */}
                <div className={`scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                    <Tabs defaultValue="message" className="w-full">
                        <TabsList className="grid grid-cols-2 mb-6 w-full">
                            <TabsTrigger value="message" className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" />
                                {t('tabMessage')}
                            </TabsTrigger>
                            <TabsTrigger value="booking" className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {t('tabBooking')}
                            </TabsTrigger>
                        </TabsList>

                        {/* Tab Message */}
                        <TabsContent value="message">
                            <div className="bg-card p-6 md:p-8 border rounded-2xl">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="gap-5 grid sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="font-medium text-sm">
                                                {t('formName')}
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder={t('formNamePlaceholder')}
                                                required
                                                disabled={formState === 'loading'}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="font-medium text-sm">
                                                {t('formEmail')}
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t('formEmailPlaceholder')}
                                                required
                                                disabled={formState === 'loading'}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="font-medium text-sm">
                                            {t('formSubject')}
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t('formSubjectPlaceholder')}
                                            required
                                            disabled={formState === 'loading'}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="font-medium text-sm">
                                            {t('formMessage')}
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t('formMessagePlaceholder')}
                                            required
                                            disabled={formState === 'loading'}
                                            className="min-h-[150px] resize-none"
                                        />
                                    </div>

                                    {/* Message de succès/erreur */}
                                    {formState === 'success' && (
                                        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/50 p-3 rounded-lg text-green-600 dark:text-green-400 text-sm">
                                            <CheckCircle2 className="w-4 h-4" />
                                            {t('formSuccess')}
                                        </div>
                                    )}
                                    {formState === 'error' && (
                                        <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950/50 p-3 rounded-lg text-red-600 dark:text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            {t('formError')}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="hover:shadow-lg hover:shadow-primary/25 w-full hover:scale-[1.02] transition-all"
                                        disabled={formState === 'loading'}
                                    >
                                        {formState === 'loading' ? (
                                            <>
                                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                                {t('formSending')}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 w-4 h-4" />
                                                {t('formSubmit')}
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </TabsContent>

                        {/* Tab Booking */}
                        <TabsContent value="booking">
                            {eventTypeId ? (
                                <BookingWidget eventTypeId={eventTypeId} />
                            ) : (
                                <div className="bg-card p-8 border rounded-2xl text-center">
                                    <Calendar className="mx-auto mb-4 w-12 h-12 text-muted-foreground/50" />
                                    <p className="text-muted-foreground">{t('bookingNotConfigured')}</p>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
